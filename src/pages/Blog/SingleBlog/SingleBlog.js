import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import CommentList from "./Comment/List";
import Header from "./Blog/Header";
import Image from "./Blog/Image";
import Text from "./Blog/Text";
import Audio from "./Audio/Audio";
import Info from "./Info/Info";
import Related from "./Related/Related";
import Navbar from "../../../components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  blogSingleFetchAction,
  commentFetchAction,
} from "../../../store/apps/blogs/blog-action";
// import { blogSingleFetchAction } from ".././../../store/apps/blogs/blog-action";

const SingleBlog = () => {
  const blog = useSelector((state) => state.blog);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const blogid = useParams();
  const [isInitial, setIsInitial] = useState(true);
  console.log(blogid.blogid);
  console.log("calling");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInitial) {
        dispatch(blogSingleFetchAction(blogid.blogid));
        dispatch(commentFetchAction(blogid.blogid));
        setIsInitial(false);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, isInitial, blogid.blogid]);

  // React.useEffect(() => {
  //   console.log("calling single blog");
  //   const timer = setTimeout(() => {
  //     console.log("calling");
  //     dispatch(blogSingleFetchAction(blogid?.blogid));
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [dispatch, blogid.blogid]);

  return (
    <>
      <Navbar />
      <div className="mb-8">
        <div className=" grid md:grid-cols-3 grid-cols-1 px-2 md:px-6">
          {ui.isLoading ? (
            "Loading"
          ) : (
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
                  {/* ad */}
                  {/* <Header /> */}
                  {/* ad */}
                </div>
                <div className="grid place-items-center pt-5">
                  {/* cover image */}
                  {blog?.blogPostItem?.coverImage ? (
                    <Image img={blog?.blogPostItem?.coverImage} />
                  ) : (
                    <div className="w-8/12 h-96 rounded-md bg-gray-200 ">
                      <div className="align-middle text-center pt-48 text-primary font-semibold">
                        {blog?.blogPostItem?.title}
                      </div>
                    </div>
                  )}
                  {/* cover image */}
                </div>
                <div className="grid place-items-center">
                  {/* content, title */}
                  <Text
                    // content={blog?.blogPostItem?.content}
                    title={blog?.blogPostItem?.title}
                  />
                </div>
                <CommentList />
              </Scrollbars>
            </div>
          )}
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
                <Audio srcaudio={blog?.blogPostItem?.audio} />
              </span>
              <hr className="mt-6" />
              <span className="grid place-items-center">
                <Info
                  username={blog?.blogPostItem?.user?.name}
                  blogid={blogid.blogid}
                  userid={blog?.blogPostItem?.user?.id}
                  likes={blog?.blogPostItem?.likes}
                />
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
