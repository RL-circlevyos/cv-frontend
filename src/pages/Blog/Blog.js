import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Scrollbars from "react-custom-scrollbars-2";
import Leaders from "./BlogLeader/Leaders";
import List from "./Imagines/List";
import { LightningBoltIcon } from "@heroicons/react/solid";
import SearchBar from "./BlogSearch/SearchBar";
import BookData from "./BlogSearch/Data.json";
import Navbar from "../../components/Navbar";
import SkeletonLoader from "../../components/SkeletonLoader/SkeletonLoader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { blogFetchAction } from "../../store/apps/blogs/blog-action";
import { generalImagineFetchAction } from "../../store/apps/imagines/imagine-action";
// import { motion } from "framer-motion";

const Blog = () => {
  // const [loading, setLoading] = useState(true);
  const blog = useSelector((state) => state.blog);
  const ui = useSelector((state) => state.ui);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogFetchAction());
  }, [dispatch]);

  // blog.blogPosts.map((blog) => console.log(blog));

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [loading]);

  return (
    <div className="fixed h-screen w-full ">
      <div className="">
        <Navbar />
        <div className="mb-8">
          <div className="max-w-large gap-x-2 grid md:grid-cols-3 px-1 ">
            <div className="">
              <SearchBar placeholder="Search blogs...." data={BookData} />
              <Sidebar />
            </div>
            <div className="pt-1 px-1 py-4 w-full">
              <div className="mt-1 w-full ">
                <Scrollbars
                  thumbSize={1}
                  autoHide
                  style={{ width: "100%", height: "95vh" }}
                >
                  <div className="space-y-5 mb-20 lg:mb-10 w-full overflow-x-hidden px-2">
                    {blog.blogPosts.map((blog) => {
                      console.log(blog.id);
                      return (
                        <>
                          {ui.isLoading ? (
                            <SkeletonLoader />
                          ) : (
                            <Card
                              key={blog.id}
                              link={`/blog/${blog.id}`}
                              title={blog.title}
                              content={blog.content}
                              coverImage={blog.coverImage}
                              keywords={blog.keywords}
                              username={blog.user.name}
                              userid={blog.user.id}
                              audiosrc={blog.audio}
                              likes={blog.likes}
                            />

                            // <Card
                            //   link={1}
                            //   title="title"
                            //   content="{blog.content}"
                            //   // avatar={blog.avatar}
                            //   userName="user_anme"
                            //   // likes={blog.likes}
                            //   date="45-45-5"
                            // />
                          )}
                        </>
                      );
                    })}
                  </div>
                </Scrollbars>
              </div>
            </div>
            <div className="md:flex md:flex-col hidden space-y-3 mb-5 mt-2">
              <div className="md:flex md:flex-col hidden space-y-3 mb-5 mt-2">
                {/* <div className="">
                  <Leaders />
                </div> */}

                <div className="space-y-3 h-screen">
                  <span className="w-2/3">
                    <span className=" flex  items-center  px-2 justify-between font-Libre">
                      <span className="text-3xl ml-48 text-yellow-900">
                        Imagines
                      </span>
                      <span className="float-right">All</span>
                    </span>
                  </span>
                  <div className="shadow-md"></div>
                  <List />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Blog);
