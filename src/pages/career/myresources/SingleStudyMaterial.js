import { DocumentIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { Link, useParams } from "react-router-dom";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import PersonImage from "../../../assets/person.png";
import { useDispatch, useSelector } from "react-redux";
import { getSingleNoteAction } from "../../../store/apps/myresources/myresource-action";
import moment from "moment";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const NoteFiles = () => {
  return (
    <>
      <div className="items-start">
        <DocumentIcon className="h-14 w-14" />
        <div className="text-gray-500">Note name</div>
      </div>
    </>
  );
};

function SingleStudyMaterial() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { singleMaterial } = useSelector((state) => state.myresource);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSingleNoteAction(token, id));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [token, id, dispatch]);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className="fixed">
      <Navbar />
      <div className="flex w-screen h-screen">
        <CareerSidebar />
        <div className="h-screen w-screen overflow-y-auto  flex-grow px-60  py-5 bg-gray-50">
          <Link to="/career-guide/myresources/materials">
            <ArrowLeftCircle />
          </Link>
          <div className="py-5 flex space-x-2 items-center ">
            <img src={PersonImage} className="h-10 w-10 rounded-full" alt="" />
            <div>
              <div className="text-greyish-700 font-Mulish font-medium">
                {singleMaterial?.singleMaterial?.user?.name}
              </div>
              <div className="text-sm text-greyish-700 font-Mulish font-medium">
                Published on{" "}
                {moment(singleMaterial?.singleMaterial?.createdAt).format(
                  "MMMM Do YYYY"
                )}
              </div>
            </div>
          </div>
          <div className="text-3xl font-semibold font-Mulish text-blue-700 pt-3">
            {singleMaterial?.singleMaterial?.name}
          </div>

          <div className="pt-5 space-x-2">
            <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
              Description
            </div>

            <div className="text-justify font-Mulish text-xl  text-greyish-700">
              {singleMaterial?.singleMaterial?.details}
            </div>
          </div>
          <div className="space-y-2 pt-5 grid grid-cols-1 grid-rows-2">
            <div>
              <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
                Notes
              </div>

              <div className="grid grid-cols-5 gap-3">
                <Document
                  file={
                    singleMaterial?.singleMaterial?.materialFile?.secure_url
                  }
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              </div>

              <div className="flex justify-evenly">
                <p className="text-lg font-semibold text-teal-800">
                  Page {pageNumber} of {numPages}
                </p>
                <div className="flex space-x-2">
                  {pageNumber > 1 && (
                    <ArrowLeftCircle
                      className="h-7 w-7"
                      onClick={changePageBack}
                    />
                  )}
                  {pageNumber < numPages && (
                    <ArrowRightCircle
                      className="h-7 w-7"
                      onClick={changePageNext}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleStudyMaterial);
