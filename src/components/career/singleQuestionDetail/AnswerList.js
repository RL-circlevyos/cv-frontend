import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createAnswerAction } from "../../../store/apps/qna/qna-action";
import AnswerListItem from "./AnswerListItem";

function AnswerList() {
  const { answerList } = useSelector((state) => state.qna);
  const [showModal, setShowModal] = useState(false);
  const [answerBody, setanswerBody] = useState();
  const formdata = new FormData();
  formdata.append("body", answerBody);
  const dispatch = useDispatch();
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createAnswerAction(formdata, id, auth.token));

    setShowModal(false);
  };

  return (
    <div className="border-t-2 ">
      <div className="flex justify-between pt-2">
        <div></div>
        <div
          onClick={() => setShowModal(true)}
          className="bg-teal-600 mb-2 text-white font-semibold hover:bg-teal-700 cursor-pointer px-3 py-1  rounded-full "
        >
          Write Answer
        </div>
        {showModal ? (
          <>
            <div className=" bg-gray-300 bg-opacity-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full my-6 mx-auto max-w-4xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-100  outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Write Answer</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl text-white  font-semibold block bg-red-700  py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                      <label className="block text-black text-sm font-bold mb-1">
                        Your answer
                      </label>
                      <textarea
                        onChange={(e) => setanswerBody(e.target.value)}
                        className="shadow focus:outline-none appearance-none border rounded w-full py-2 px-1 text-black"
                      />
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-teal-500 active:bg-teal-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="space-y-3  h-full mx-auto pb-44">
        {answerList?.answers?.map((answer) => (
          <>
            {" "}
            <AnswerListItem
              username={answer?.user?.name}
              userprofile={answer?.user?.photo?.secure_url}
              body={answer?.body}
              accept={answer?.accept}
              createat={answer?.createdAt}
              key={answer?._id}
            />{" "}
          </>
        ))}
        {/* <AnswerListItem />
        <AnswerListItem />
        <AnswerListItem /> */}
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default React.memo(AnswerList);
