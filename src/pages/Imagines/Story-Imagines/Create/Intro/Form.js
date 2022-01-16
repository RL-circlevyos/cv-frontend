/**  import React, { useCallback, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

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

// const Form = () => {
//   let navigate = useNavigate();
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

//       const newpost = {
//         title: title,
//         body: body,
//         genre: itemList,
//       };
//       console.log(newpost);

//       setTitle("");
//       setBody("");

//       navigate("/story-imagines/story-intro/details");
//     },
//     [title, navigate, isChecked, body]
//   );
//   /*********************submit function ***************/
//   return (
//     <div className="flex justify-center flex-col items-center w-full">
//       <div className="max-w-3xl w-full">
//         <form
//           onSubmit={handleSubmit}
//           className="px-3 lg:px-6 py-2 space-y-1 text-base block font-Mulish pb-6 "
//         >
//           <div>
//             <span className="w-full">
//               <label className="ml-4 text-xs uppercase font-bold">
//                 story name
//               </label>
//               <span className=" w-full text-sm flex items-center border rounded-xl px-1 hover:border-primary border-gray-300 bg-white ">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Title of your Story"
//                   className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
//                   value={title}
//                   onChange={(e) => setTitleContent(e.target.value)}
//                 />
//               </span>
//               <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
//                 {title.length}/100
//               </p>
//             </span>
//           </div>
//           <div
//             className="flex items-center flex-col justify-center w-full flex-wrap lg:flex-nowrap pt-10
//           space-y-4 lg:space-y-0 lg:space-x-5"
//           >
//             <label className="text-base uppercase font-bold mb-10">
//               Select story genre
//             </label>
//             <div className="flex flex-wrap items-center gap-x-3 lg:gap-x-6 px-3">
//               {data.map((d) => {
//                 return (
//                   <div className="mb-7" key={d.id}>
//                     <input
//                       className="border-gray-600 w-5 h-5 border cursor-pointer"
//                       type="checkbox"
//                       name={d.name}
//                       checked={isChecked[`${d.name}`]}
//                       onChange={handleSingleCheck}
//                     />
//                     <label className="ml-1 text-lg text-gray-600">
//                       {d.name}
//                     </label>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="w-full pt-5">
//               {" "}
//               <span className="w-full ">
//                 <label className="ml-4 text-xs uppercase font-bold">
//                   Introduction
//                 </label>
//                 <span className="w-full flex items-center border rounded-xl px-2 py-1 hover:border-primary border-gray-300 bg-white ">
//                   <textarea
//                     required
//                     rows="6"
//                     type="text"
//                     placeholder="prologue of your story"
//                     className="font-medium w-full px-1 ml-2 py-1 focus:outline-none lg:text-base text-sm  form-control"
//                     value={body}
//                     onChange={(e) => setBodyContent(e.target.value)}
//                   />
//                 </span>
//                 <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
//                   {body.length}/800
//                 </p>
//               </span>
//             </div>
//             <div className="flex justify-between items-center mb-4 pt-10">
//               <div></div>
//               <div className="flex items-center space-x-2 ">
//                 <Link
//                   to="/story-imagines/myimagines"
//                   className="py-1.5 lg:py-2 lg:px-3 font-bold px-2 rounded-sm text-sm lg:text-base transition duration-200 bg-gray-200 text-primary focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
//                 >
//                   Back
//                 </Link>
//                 <button
//                   type="submit"
//                   className="py-1.5 lg:py-2 lg:px-3 px-2 font-bold rounded-sm text-sm lg:text-base transition duration-200 bg-primary text-gray-50 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>{" "}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;*/
