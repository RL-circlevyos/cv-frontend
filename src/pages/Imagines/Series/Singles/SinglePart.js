/**import {
//   ArrowLeftIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   MenuAlt1Icon,
// } from "@heroicons/react/solid";
// import React, { useCallback, useState } from "react";
// import { BookOpen } from "react-feather";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import dp from "../../../../assets/person.png";
// import song from "../../../../assets/Vsong.mp3";
// import CommentList from "../../Comment/List";
// import AlertDialogSlide from "./../../../../components/Dialog";
// import TemporaryDrawer from "./Drawer";

// const SinglePart = () => {
//   const auth = useSelector((state) => state.auth);
//   const user = auth.userid;
//   const [open, setOpen] = useState(false);

//   const handleClickOpen = useCallback(() => {
//     setOpen(true);
//   }, []);

//   const handleClose = useCallback(() => {
//     setOpen(false);
//   }, []);

//   const [follow, setFollow] = useState(false);
//   const clickFollowHandler = useCallback(() => {
//     user ? setFollow(!follow) : handleClickOpen();
//   }, [follow, handleClickOpen, user]);

//   return (
//     <div className="w-full flex flex-col justify-center items-center font-Mulish">
//       <div className="max-w-6xl w-full gap-y-6">
//         <Link to="/series/storyname/:id">
//           <ArrowLeftIcon className="h-6 w-6" />
//         </Link>
//         <div className="flex justify-between items-start w-full">
//           <div className="flex items-start pt-3 gap-x-6 px-1.5 ">
//             <div className="flex flex-1 ">
//               <Link to={`/contribution/profile-imagines/:id`}>
//                 <img
//                   src={dp}
//                   alt="dp"
//                   className="w-7 h-7 rounded-full object-cover"
//                 />
//               </Link>

//               <span className="text-sl ml-2 font-bold text-gray-900">
//                 User Name
//               </span>
//               <span className="cursor-pointer" onClick={clickFollowHandler}>
//                 {follow ? (
//                   <span className="bg-sky-600 text-gray-100 px-1 py-1 font-bold text-tiny cursor-pointer ml-2">
//                     Following
//                   </span>
//                 ) : (
//                   <span className="text-sky-500 bg-gray-100 px-1 py-1 text-tiny font-bold cursor-pointer ml-2">
//                     Follow
//                   </span>
//                 )}
//               </span>
//             </div>
//           </div>
//           <div className="flex justify-center items-center gap-x-4 ">
//             <Link
//               to="/series/storyname/:id/part/:id"
//               className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
//             >
//               <b className=" text-sm uppercase bg-primary px-3 py-1 rounded text-white flex items-center">
//                 <ChevronLeftIcon className="h-7 w-7" /> Prev
//               </b>
//             </Link>
//             <Link
//               to="/series/storyname/:id/part/:id"
//               className="flex items-center gap-1  hover:bg-greyish-200 cursor-pointer transition duration-500 linear px-3 py-2 rounded-md text-xs font-medium"
//             >
//               <b className="flex items-center text-sm uppercase bg-cyan-700 px-3 py-1 rounded text-white">
//                 Next <ChevronRightIcon className="h-7 w-7" />
//               </b>
//             </Link>
//             <div className="flex items-center text-base hover:bg-gray-100 rounded cursor-pointer px-1 py-1">
//               <TemporaryDrawer bname={<MenuAlt1Icon className="h-7 w-7" />} />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center flex-col w-full pt-6">
//           <span className="text-2xl font-extrabold">Series Name</span>
//           <div className="flex justify-center items-start flex-wrap lg:flex-nowrap w-full lg:gap-x-5 pt-6">
//             <div className="w-full lg:w-7/12 flex h-96 mb-4 bg-gray-50 shadow">
//               <img
//                 src="https://images.unsplash.com/photo-1638208561774-6e02a8e17cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
//                 alt="firstpic"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div className="flex flex-col justify-start items-start w-full lg:w-5/12">
//               <span className="w-full font-bold text-xl">
//                 Here is the Title
//               </span>
//               <span className="w-full text-base flex items-center gap-x-4 lg:pt-6 font-extrabold">
//                 <BookOpen className="h-7 w-7" />
//                 <i>
//                   Part <b>1</b>
//                 </i>
//               </span>
//               <span className="w-full mt-8 font-medium ">
//                 Story Audio
//                 <audio className="w-full mt-2" controls src={song} />
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="font-medium text-sl px-4 leading-8 text-justify pt-6 w-full">
//           {/* <div
//         className="font-medium px-4 text-justify pt-6"
//         dangerouslySetInnerHTML={{
//           __html: content,
//         }}
//       ></div> /}
//           King Agnarr of Arendelle tells his daughters Elsa and Anna that their
//           grandfather, King Runeard, forged a treaty with the neighboring tribe
//           of Northuldra by building a dam in the Enchanted Forest (their
//           homeland). A fight occurs, however, resulting in Runeard's death and
//           enraging the forest's classical elements of earth, fire, water, and
//           air. The elements disappear, and a wall of mist traps everyone in the
//           forest; Agnarr barely escapes, helped by an unknown savior.😌 Three
//           years after her coronation,[b] Elsa celebrates autumn in the kingdom
//           with Anna, the snowman Olaf, the iceman Kristoff, and Kristoff's
//           reindeer Sven. One night, Elsa hears a mysterious voice calling her.
//           She follows it, unintentionally awakening the elemental spirits and
//           forcing everyone in the kingdom to evacuate. The Rock Troll colony
//           arrives, and Grand Pabbie tells them that Elsa and the others must set
//           things right by uncovering the truth about the past. Elsa, Anna, Olaf,
//           Kristoff and Sven follow the mysterious voice, and travel to the
//           Enchanted Forest. The mist parts at Elsa's touch, while the air spirit
//           appears as a tornado, catching everyone in its vortex before Elsa
//           stops it by forming ice sculptures. She and Anna discover that the
//           sculptures are images from their father's past, and encounter the
//           Northuldra and a troop of Arendellian soldiers who are still in
//           conflict with one another. When the fire spirit appears, Elsa
//           discovers that it is an agitated magical salamander and calms it. Elsa
//           and Anna arrange a truce between the soldiers and the Northuldra after
//           discovering that their mother, Queen Iduna, was a Northuldran who had
//           saved Agnarr (an Arendellian). They later learn about a fifth spirit,
//           who will unite the people with the magic of nature.
//         </div>
//         <div className="w-full px-3 py-1 mt-3">
//           {" "}
//           <CommentList />
//         </div>
//       </div>
//       <AlertDialogSlide
//         open={open}
//         handleClose={handleClose}
//         title="Login to Circlevyos"
//         content="To get your own access on different contents you should signin first"
//         link="/login"
//         show={true}
//       />
//     </div>
//   );
// };

// export default React.memo(SinglePart);*/
