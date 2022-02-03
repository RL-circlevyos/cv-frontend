// export const fileUploadAction = (subjectid, data) => async (dispatch) => {
//     const fileUpload = async () => {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_BASE_URL}/subjects/${subjectid}/resources`,
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: "true",

//           onUploadProgress: (progressEvent) => {
//             let value = parseInt(
//               Math.round((progressEvent.loaded * 100) / progressEvent.total)
//             );

//             dispatch(
//               resourceSliceAction.uploadIndicator({
//                 isShow: true,
//               })
//             );
//             dispatch(
//               resourceSliceAction.uploadPercentage({
//                 uploadPercentage: value,
//               })
//             );
//           },
//         }
//       );

//       // Clear percentage
//       setTimeout(() => {
//         dispatch(
//           resourceSliceAction.uploadPercentage({
//             uploadPercentage: 0,
//             uploadMessage:"File(s) uploaded"
//           })
//         );
//         dispatch(
//           resourceSliceAction.uploadIndicator({
//             isShow: false,
//           })
//         );
//       }, 5000);

//       // const response = await fetch(
//       //   `${process.env.REACT_APP_API_BASE_URL}/subjects/${subjectid}/resources`,
//       //   {
//       //     method: "POST",
//       //     credentials: "include",
//       //     body: data,
//       //   }
//       // );
//       console.log(response.json());

//       if (!response.ok) {
//         throw Error("file upload failed");
//       }
//     };

//     try {
//       await fileUpload();

//       dispatch(
//         resourceSliceAction.uploadPercentage({
//           uploadPercentage: 0,
//           uploadMessage:""
//         })
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };
