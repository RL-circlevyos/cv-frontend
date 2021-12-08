// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import EditorToolbar, {
//   modules,
//   formats,
// } from "../../../components/EditToolbar";
// import "react-quill/dist/quill.snow.css";
// import Scrollbars from "react-custom-scrollbars-2";

// function Create() {
//   const [userInfo, setuserInfo] = useState({
//     description: "",
//   });

//   const ondescription = (value) => {
//     setuserInfo({ ...userInfo, description: value });
//   };

//   const addDetails = (event) => {
//     event.preventDefault();

//     const newPost = {
//       description: userInfo.description,
//     };
//     console.log(newPost);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-start">
//         <Scrollbars style={{ width: "100%", height: "99vh" }}>
//           <div className="hidden md:block"></div>
//           <div>
//             <form onSubmit={addDetails} className="">
//               <div className="grid place-items-center pb-20">
//                 <EditorToolbar toolbarId={"t1"} />
//                 <div className="max-w-4xl ">
//                   <ReactQuill
//                     theme="snow"
//                     value={userInfo.description}
//                     onChange={ondescription}
//                     placeholder={"Write something awesome..."}
//                     modules={modules("t1")}
//                     formats={formats}
//                   />{" "}
//                 </div>{" "}
//                 <div className="form-group col-sm-12 text-right">
//                   <button type="submit" className="btn btn__theme">
//                     {" "}
//                     Submit{" "}
//                   </button>
//                 </div>{" "}
//               </div>
//             </form>{" "}
//           </div>
//           <div className="hidden md:block"></div>
//         </Scrollbars>
//       </div>
//     </>
//   );
// }
// export default Create;

import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, {
  modules,
  formats,
} from "../../../components/EditToolbar";
import "react-quill/dist/quill.snow.css";
import Scrollbars from "react-custom-scrollbars-2";

export const Create = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div className="flex justify-between items-start px-4 py-3 mb-20">
      <Scrollbars style={{ width: "100%", height: "89vh" }}>
        <div className=""></div>
        <div className="">
          <div className="text-editor ">
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              value={state.value}
              onChange={handleChange}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
            />
          </div>
          <button>submit</button>
        </div>
        <div className=""></div>
      </Scrollbars>
    </div>
  );
};

export default Create;
