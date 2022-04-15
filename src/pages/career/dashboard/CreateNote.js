import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CareerSidebar from "../../../components/career/CareerSidebar";
import Navbar from "../../../components/Navbar";
import { createNoteAction } from "../../../store/apps/myresources/myresource-action";

function CreateNote() {
  const [noteTitle, setNoteTitle] = useState();
  const [noteDescription, setNoteDescription] = useState();
  const [noteThumbnail, setNoteThumbnail] = useState();
  const [noteFile, setNoteFile] = useState();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const thumbnailInputChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNoteThumbnail(e.target.files[0]);
    }
  }, []);

  const noteInputChange = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNoteFile(e.target.files[0]);
    }
  }, []);

  const formdata = new FormData();
  formdata.append("name", noteTitle);
  formdata.append("details", noteDescription);
  formdata.append("materialFile", noteFile);
  formdata.append("thumbnail", noteThumbnail);
  // formdata.append("thumbnail",noteThumbnail)

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createNoteAction(token, formdata));

    navigate("/dashboard/mentor/mynotes");
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <CareerSidebar />
        <div className="h-screen w-screen bg-gray-50">
          <div className=" ">
            <form className="grow bg-gray-50 h-screen px-60 py-5">
              <div className="flex items-center justify-between pb-5">
                <Link to="/dashboard/mentor/mynotes">
                  <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-gray-500 cursor-pointer" />
                </Link>

                <div
                  onClick={handleSubmit}
                  className="bg-primary px-5 py-2 rounded-lg text-white font-semibold w-min cursor-pointer hover:bg-teal-700"
                >
                  Post
                </div>
              </div>

              <div className="space-y-2 text-left items-start align-">
                <div className="px-2 text-base font-semibold text-gray-600">
                  Note title
                </div>
                <input
                  onChange={(e) => setNoteTitle(e.target.value)}
                  placeholder="Write note title"
                  className="bg-gray-200 px-5 py-3 w-full rounded-full focus:outline-none"
                />
              </div>
              <div>
                <div className="px-2 text-base py-3 font-semibold text-gray-600">
                  Description
                </div>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows=""
                  onChange={(e) => setNoteDescription(e.target.value)}
                  className="bg-gray-200 px-5 py-3 w-full rounded-md focus:outline-none"
                />
                {/* <Editor
          editorState={editorState}
          placeholder="Type your main content"
          toolbarClassName="flex justify-center mx-auto w-full"
          editorClassName="mt-6 bg-white shadow py-5 px-3 max-w-20"
          onEditorStateChange={onEditorStateChange}
          handleBeforeInput={handleBeforeInput}
          handlePastedText={handlePastedText}
          toolbar={{
            options: [
              "inline",
              // "blockType",
              "emoji",
              "colorPicker",
              // "list",
              "link",
              // "textAlign",
              //"history",
            ],
          }}
        /> */}
              </div>
              <div>
                <div className="px-2 text-base py-3 font-semibold text-gray-600">
                  Thumbnail
                </div>
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={thumbnailInputChange}
                />
              </div>
              <div>
                <div className="px-2 text-base py-3 font-semibold text-gray-600">
                  Upload note files
                </div>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={noteInputChange}
                />
              </div>
              {/* TODO: Tag input */}
              {/* TODO: Price input */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CreateNote);
