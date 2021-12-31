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
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  blogSingleFetchAction,
  commentFetchAction,
} from "../../../store/apps/blogs/blog-action";
// import { blogSingleFetchAction } from ".././../../store/apps/blogs/blog-action";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import List from "./Achievements/List";
import Bar from "./Achievements/Bar";

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
      <div className="mb-5 font-Mulish">
        <div className="px-5 py-1">
          <Link to="/">
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 px-2 md:px-6">
          {ui.isLoading ? (
            "Loading"
          ) : (
            <div className="md:col-span-2 col-span-full px-3">
              <Scrollbars
                thumbSize={1}
                autoHide
                autoHeight
                autoHeightMax={"90vh"}
                style={{
                  width: "100%",
                  //  height: "92vh",
                }}
              >
                {" "}
                <div className="pt-1">
                  {/* ad */}
                  {/* <Header /> */}
                  {/* ad */}
                </div>
                <div className="flex flex-col justify-center items-center pt-1">
                  <div className="text-2xl font-extrabold pb-3">
                    {blog?.blogPostItem?.title}
                  </div>

                  {/* cover image */}
                  {blog?.blogPostItem?.coverImage ? (
                    <>
                      <Image img={blog?.blogPostItem?.coverImage} />{" "}
                      <div className="flex justify-between items-start w-full lg:w-8/12 px-4">
                        <div></div>
                        <div className="flex justify-center items-start lg:space-x-3">
                          <List />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full flex flex-col justify-center items-center">
                        <div className="lg:w-8/12 w-full h-54 rounded-md bg-gray-100 shadow">
                          <div className="align-middle text-center p-20 text-primary uppercase font-semibold">
                            {blog?.blogPostItem?.title}
                          </div>
                        </div>{" "}
                      </div>
                      <div className="flex justify-between items-start w-full lg:w-8/12 px-4">
                        <div></div>
                        <div className="flex justify-center items-start lg:space-x-3">
                          <List />
                        </div>
                      </div>
                    </>
                  )}
                  {/* cover image */}
                </div>
                <div className="block md:hidden w-full">
                  <Audio srcaudio={blog?.blogPostItem?.audio} />
                </div>
                <div className="flex">
                  <Text
                    // content={blog?.blogPostItem?.content}
                    title={blog?.blogPostItem?.title}
                  />
                </div>
                <div className="w-full px-3 py-1 mt-3">
                  {" "}
                  <Bar />
                </div>
                <div className="w-full px-3 py-1 mt-3">
                  {" "}
                  <CommentList />
                </div>
              </Scrollbars>
            </div>
          )}
          <div className="space-y-2 md:block hidden col-span-1">
            <Scrollbars
              thumbSize={1}
              autoHide
              style={{
                width: "100%",
                height: "92vh",
                backgroundColor: "white",
              }}
            >
              <span>Play Audios</span>
              <span className="">
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
