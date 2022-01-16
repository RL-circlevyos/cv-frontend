/**  import { PencilIcon, UploadIcon } from "@heroicons/react/solid";
// import React, { useCallback, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import song from "../../../../assets/BTS - Pied Piper (방탄소년단 - Pied Piper) _Color Coded Lyrics_Han_Rom_Eng_가사_ ( 128kbps ).mp3";

// const data = [
//   {
//     name: "Science",
//     id: 1,
//   },
//   {
//     name: "Fantasy",
//     id: 2,
//   },
//   {
//     name: "Life Events",
//     id: 3,
//   },
//   {
//     name: "Fiction",
//     id: 4,
//   },
//   {
//     name: "Horror",
//     id: 5,
//   },
//   {
//     name: "Mystery",
//     id: 6,
//   },
//   {
//     name: "Business",
//     id: 7,
//   },
//   {
//     name: "Entertainment",
//     id: 8,
//   },
//   {
//     name: "Food",
//     id: 9,
//   },
//   {
//     name: "Music",
//     id: 10,
//   },
//   {
//     name: "Romance",
//     id: 11,
//   },
//   {
//     name: "Nature",
//     id: 12,
//   },
//   {
//     name: "Historical",
//     id: 13,
//   },
//   {
//     name: "Technology",
//     id: 14,
//   },
//   {
//     name: "Thriller",
//     id: 15,
//   },
//   {
//     name: "Others",
//     id: 16,
//   },
// ];

// const Header = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const setTitleContent = useCallback(
//     (text) => {
//       setTitle(text.slice(0, 100));
//     },
//     [setTitle]
//   );
//   const setBodyContent = useCallback(
//     (text) => {
//       setBody(text.slice(0, 800));
//     },
//     [setBody]
//   );
//   const [coverImage, setCoverImage] = useState();

//   const coverImageChange = useCallback((e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setCoverImage(e.target.files[0]);
//     }
//   }, []);
//   const removecoverImage = useCallback(() => {
//     setCoverImage();
//   }, []);

//   const [storyAudio, setStoryAudio] = useState();

//   const storyAudioChange = useCallback((e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setStoryAudio(e.target.files[0]);
//     }
//   }, []);
//   const removestoryAudio = useCallback(() => {
//     setStoryAudio();
//   }, []);
//   const [show, setShow] = useState(true);
//   const showHandler = useCallback(() => {
//     setShow(!show);
//   }, [show]);
//   const stopShow = useCallback(() => {
//     setShow(!show);
//   }, [show]);

//   const [isChecked, setIsChecked] = useState([]);

//   /*********************submit function ***************/
//   const handleSingleCheck = useCallback((e) => {
//     setIsChecked({ [e.target.name]: e.target.checked });
//   }, []);
//   const handleSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       const itemList = Object.keys(isChecked).map((key) => {
//         if (isChecked[key] === true) {
//           console.log(key);
//           return key;
//         }
//       });

/*       const newpost = {
//         title: title,
//         body: body,
//         genre: itemList,
//         audio: storyAudio,
//         cover: coverImage,
//       };
//       console.log(newpost);

//       setTitle("");
//       setBody("");
//       setCoverImage();
//       setStoryAudio();
//     },
//     [title, isChecked, body, storyAudio, coverImage]
//   );
//   /*********************submit function ***************/
//   return (
//     <div className="flex justify-center flex-col items-center w-full">
//       <div className="max-w-7xl w-full">
//         <form
//           onSubmit={handleSubmit}
//           className="px-3 py-2 space-y-1 text-base font-Mulish pb-6"
//         >
//           <div className=" lg:flex justify-between items-start block">
//             {/***********title start *********/}
//             <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
//               {show && (
//                 <span className="flex justify-between items-center w-full">
//                   <span></span>
//                   <span
//                     onClick={showHandler}
//                     className="bg-gray-200 flex items-start px-2 py-1 font-bold justify-end cursor-pointer"
//                   >
//                     Edit <PencilIcon className="h-5 w-5" />
//                   </span>
//                 </span>
//               )}
//               <div className="text-left w-full ">
//                 <label className=" text-sm uppercase font-bold flex justify-start items-center space-x-3 ml-6">
//                   <b>story name</b>
//                 </label>
//                 {show ? (
//                   <span className="w-full flex flex-col ml-6">
//                     <span className="text-xl ">A Horror Story</span>
//                   </span>
//                 ) : (
//                   <span className="w-full">
//                     <span className=" w-full text-sm flex items-center border rounded-xl px-1 hover:border-primary border-gray-300 bg-white ">
//                       <input
//                         type="text"
//                         required
//                         placeholder="Title of your Story"
//                         className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
//                         value={title}
//                         onChange={(e) => setTitleContent(e.target.value)}
//                       />
//                     </span>
//                     <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
//                       {title.length}/100
//                     </p>
//                   </span>
//                 )}
//               </div>
//               {/***********title ends *********/}

//               {/***********genre start *********/}
//               <div
//                 className="flex items-start flex-col justify-start w-full flex-wrap pt-5
//           space-y-4 lg:space-y-0 lg:space-x-5"
//               >
//                 <label className="text-sm uppercase font-bold mb-5 ml-5">
//                   story genre
//                 </label>
//                 {show ? (
//                   <span className="text-base bg-cyan-700 text-white w-1/4 py-1 font-bold flex justify-center">
//                     Science
//                   </span>
//                 ) : (
//                   <>
//                     <div className="flex flex-wrap items-center gap-x-3 lg:gap-x-6 px-3 w-full">
//                       {data.map((d) => {
//                         return (
//                           <div className="mb-7" key={d.id}>
//                             <input
//                               className="border-gray-600 w-5 h-5 border cursor-pointer"
//                               type="radio"
//                               name={d.name}
//                               checked={isChecked[`${d.name}`]}
//                               onChange={handleSingleCheck}
//                             />
//                             <label className="ml-1 text-lg text-gray-600">
//                               {d.name}
//                             </label>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </>
//                 )}
//                 {/***********genre ends *********/}

//                 {/***********intro start *********/}
//                 <div className="w-full pt-3">
//                   {" "}
//                   <label className=" text-base uppercase font-extrabold ml-2 text-gray-900">
//                     Introduction
//                   </label>
//                   {show ? (
//                     <span className="w-full flex flex-wrap text-sl px-2 mr-5 font-medium text-gray-700 mt-3 leading-relaxed">
//                       Will you read/tell me a story, daddy? Martha chose her
//                       favourite book of bedtime stories. He writes children's
//                       stories. I don't know if it's true but it's a good story
//                       (= entertaining to listen to although probably not true).
//                       She gave me her version of what had happened, but it would
//                       be interesting to hear his half/side of the story (= the
//                       events as described by him). Apparently his first words to
//                       her were "Will you marry me?" or so the story goes (= that
//                       is what people say happened).
//                     </span>
//                   ) : (
//                     <span className="w-full ">
//                       <span className="w-full flex items-center border rounded-xl px-2 py-1 hover:border-primary border-gray-300 bg-white ">
//                         <textarea
//                           required
//                           rows="6"
//                           type="text"
//                           placeholder="prologue of your story"
//                           className="font-medium w-full px-1 ml-2 py-1 focus:outline-none lg:text-base text-sm  form-control"
//                           value={body}
//                           onChange={(e) => setBodyContent(e.target.value)}
//                         />
//                       </span>
//                       <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
//                         {body.length}/800
//                       </p>
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/***********intro ends *********/}

//             {/***********cover start *********/}
//             <div className="flex flex-col w-full lg:w-1/2">
//               {show ? (
//                 <span className="w-full flex justify-center items-center h-80 mb-4">
//                   <img
//                     src="https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                     alt="firstpic"
//                     className="w-full h-full object-contain"
//                   />
//                 </span>
//               ) : (
//                 <div className="w-full px-5">
//                   <label
//                     className={`${
//                       !coverImage &&
//                       "border border-gray-200 shadow rounded-lg px-3 py-2 flex w-full justify-center h-56 mt-6 items-center cursor-pointer"
//                     } w-full`}
//                   >
//                     {!coverImage && (
//                       <>
//                         <span className="text-sm font-bold lg:text-base uppercase">
//                           cover image
//                         </span>
//                         <UploadIcon className="w-7 h-7 ml-2" />
//                       </>
//                     )}
//                     <input
//                       accept="image/*"
//                       required
//                       type="file"
//                       onChange={coverImageChange}
//                       className="invisible hidden"
//                     />
//                   </label>

//                   {coverImage && (
//                     <div className="w-full h-56 pb-3 mt-8">
//                       <img
//                         src={URL.createObjectURL(coverImage)}
//                         alt="Thumb"
//                         className="w-full h-full object-contain border border-gray-100 shadow"
//                       />
//                       <button
//                         className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-md mt-1"
//                         onClick={removecoverImage}
//                       >
//                         Remove This Image
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//               {/***********cover ends *********/}
//               {/***********audio starts *********/}
//               {show ? (
//                 <audio className="w-full" controls src={song} />
//               ) : (
//                 <div className="w-full max-xl px-5">
//                   <label
//                     className={`${
//                       !storyAudio &&
//                       "border border-gray-200 shadow rounded-lg px-3 py-2 flex w-full justify-center h-30 mt-6 items-center cursor-pointer"
//                     } w-full`}
//                   >
//                     {!storyAudio && (
//                       <>
//                         <span className="text-sm font-bold lg:text-base uppercase">
//                           Story audio
//                         </span>
//                         <UploadIcon className="w-7 h-7 ml-2" />
//                       </>
//                     )}
//                     <input
//                       accept="audio/*"
//                       type="file"
//                       onChange={storyAudioChange}
//                       className="invisible hidden"
//                     />
//                   </label>

//                   {storyAudio && (
//                     <>
//                       <div className="w-full h-30 pb-3 mt-8">
//                         <audio
//                           className="w-full"
//                           controls
//                           src={URL.createObjectURL(storyAudio)}
//                         />

//                         <button
//                           className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-md mt-1"
//                           onClick={removestoryAudio}
//                         >
//                           Remove This Audio
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               )}
//               {/***********audio ends *********/}
//               {!show && (
//                 <div className="flex justify-between items-center mb-4 pt-10">
//                   <div></div>
//                   <div className="flex items-center space-x-2 ">
//                     <button
//                       onClick={stopShow}
//                       className="py-1.5 lg:py-2 lg:px-3 font-bold px-2 rounded-sm text-sm lg:text-base transition duration-200
//                        bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-gray-400 hover:text-gray-100"
//                     >
//                       Dismiss
//                     </button>
//                     <button
//                       type="submit"
//                       className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200
//                        bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
//                     >
//                       Update
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Header);*/
