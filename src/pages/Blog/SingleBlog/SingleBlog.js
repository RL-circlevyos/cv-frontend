import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CommentList from "./Comment/List";
import Header from "./Blog/Header";
import Image from "./Blog/Image";
import Text from "./Blog/Text";
import Audio from "./Audio/Audio";
import Info from "./Info/Info";
import Related from "./Related/Related";
import Navbar from "../../../components/Navbar";

const SingleBlog = () => {
  return (
    <>
      <Navbar />
      <div className="mb-8">
        <div className=" grid md:grid-cols-3 grid-cols-1 px-2 md:px-6">
          <div className="md:col-span-2">
            <Scrollbars
              thumbSize={1}
              autoHide
              style={{
                width: "100%",
                height: "90vh",
                backgroundColor: "white",
              }}
            >
              {" "}
              <div className="pt-4">
                <Header />
              </div>
              <div className="grid place-items-center pt-5">
                <Image />
              </div>
              <div className="grid place-items-center">
                <Text />
              </div>
              <div className="grid place-items-center pt-5">
                <Image />
              </div>
              <div className="grid place-items-center">
                <Text />
              </div>
              <CommentList />
            </Scrollbars>
          </div>
          <div className="space-y-2 md:block hidden">
            <Scrollbars
              thumbSize={1}
              autoHide
              style={{
                width: "100%",
                height: "90vh",
                backgroundColor: "white",
              }}
            >
              <span>Play Audios</span>
              <span className="">
                {" "}
                <Audio />
                <Audio />
                <Audio />
                <Audio />
                <Audio />
              </span>
              <hr className="mt-6" />
              <span className="grid place-items-center">
                <Info />
              </span>
              <hr className="mt-6" />
              <span className="grid place-items-center">
                <Related />
              </span>
            </Scrollbars>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
