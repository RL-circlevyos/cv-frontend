import React, { useEffect, useState } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";
import { Link, useParams } from "react-router-dom";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import Personimage from "../../../assets/person.png";
import { DocumentIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMockPaperAction } from "../../../store/apps/myresources/myresource-action";
import moment from "moment";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function SingleMockPapersndAns() {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const { singleMockPaper } = useSelector((state) => state.myresource);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getSingleMockPaperAction(token, id));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, token, id]);

  return (
    <div className="fixed">
      <Navbar />
      <div className="flex w-screen h-screen">
        <CareerSidebar />
        <div className="h-screen w-screen  flex-grow px-60 overflow-y-auto  py-5 bg-gray-50">
          <Link to="/career-guide/myresources/mockpapers&ans">
            <ArrowLeftCircle />
          </Link>
          <div className="py-5 flex space-x-2 items-center  ">
            <img src={Personimage} className="h-10 w-10 rounded-full" alt="" />
            <div>
              <div className="text-greyish-700 font-Mulish font-medium">
                {singleMockPaper?.singleMockPaper?.user?.name}
              </div>
              <div className="text-sm text-greyish-700 font-Mulish font-medium">
                Published on{" "}
                {moment(singleMockPaper?.singleMockPaper?.createdAt).format(
                  "MMMM Do YYYY"
                )}
              </div>
            </div>
          </div>
          <div className="text-3xl font-semibold font-Mulish text-blue-700 pt-3">
            {singleMockPaper?.singleMockPaper?.papername}
          </div>

          <div className="pt-5 space-x-2">
            <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
              Description
            </div>

            <div className="text-justify font-Mulish text-xl  text-greyish-700">
              {singleMockPaper?.singleMockPaper?.details}
            </div>
          </div>
          <div className="space-y-2 pt-5 grid grid-cols-1 grid-rows-2">
            <div>
              <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
                Question
              </div>

              <Document
                file={
                  singleMockPaper?.singleMockPaper?.questionfile?.secure_url
                }
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <div className=" flex justify-evenly">
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
            <div className="space-y-2 pt-5">
              <div className="text-lg text-gray-400 underline underline-offset-2 font-semibold">
                Answer
              </div>
              <div className="items-start">
                <DocumentIcon className="h-14 w-14" />
                <div className="text-gray-500">Answer name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleMockPapersndAns);
