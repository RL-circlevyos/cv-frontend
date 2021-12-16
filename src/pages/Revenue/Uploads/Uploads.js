import React, { useCallback, useState } from "react";
import { UploadIcon } from "@heroicons/react/solid";
import RadioInput from "../../../components/RadioInput";

const Uploads = () => {
  const [introImage, setIntroImage] = useState();
  const [gender, setGender] = useState();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const introImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setIntroImage(e.target.files[0]);
    }
  };
  const removeIntroImage = () => {
    setIntroImage();
  };
  const setTitleContent = useCallback(
    (text) => {
      setTitle(text.slice(0, 50));
    },
    [setTitle]
  );
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newpost = {
        title: title,
        gender: gender,
        link: link,
        introImg: introImage,
      };
      console.log(newpost);

      setTitle("");
      setGender();
      setIntroImage();
      setLink("");
    },
    [title, introImage, gender, link]
  );
  return (
    <div className="flex justify-center items-center w-full font-Mulish">
      <div className="max-w-xl w-full">
        <div className="flex justify-between items-center pt-8 px-4">
          <div></div>
          <div className="lg:text-xl text-lg font-bold">
            <span classname=" text-gray-700">Estimated Price:</span>
            <span className="text-pink-600 ml-2">$1200</span>
          </div>
        </div>
        <div className="lg:text-2xl text-xl font-extrabold uppercase text-primary py-2 mb-5 mt-2 px-6">
          <span classname="">Uploads</span>
        </div>{" "}
        <form onSubmit={handleSubmit} className="px-5 space-y-8">
          <div className="flex items-center justify-center w-full flex-wrap lg:flex-nowrap pt-2 lg:pt-0 space-y-4 lg:space-x-5">
            <div className="grid place-items-center">
              <label
                className={`${
                  !introImage &&
                  "border border-gray-300 rounded-md px-3 py-2 flex items-center cursor-pointer w-full h-36"
                } p-2`}
              >
                {!introImage && (
                  <>
                    <span className="text-xs font-bold lg:text-base uppercase">
                      upload
                    </span>
                    <UploadIcon className="w-7 h-7" />
                  </>
                )}
                <input
                  accept="image/*"
                  type="file"
                  onChange={introImageChange}
                  className="invisible hidden"
                />
              </label>

              {introImage && (
                <div className="w-full h-64 pb-3">
                  <img
                    src={URL.createObjectURL(introImage)}
                    alt="Thumb"
                    className="w-full h-full object-cover border border-gray-400"
                  />
                  <button
                    className="text-xs font-bold"
                    onClick={removeIntroImage}
                  >
                    Remove This Image
                  </button>
                </div>
              )}
            </div>
          </div>
          <div>
            {" "}
            <span className="w-full ">
              <label className="ml-4 text-xs uppercase font-bold">title</label>
              <span className=" w-full text-sm flex items-center border rounded-xl lg:px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                <input
                  type="text"
                  required
                  placeholder="Title of your Upload"
                  className="font-medium w-full lg:px-4 px-1 ml-2 py-2 focus:outline-none form-control "
                  value={title}
                  onChange={(e) => setTitleContent(e.target.value)}
                />
              </span>
              <p className="mr-4 text-sm uppercase font-bold text-pink-700 float-right">
                {title.length}/50
              </p>
            </span>
          </div>
          <div className="space-y-4 mt-5 mb-5">
            <RadioInput
              label="Single Post + Show when user go to new blog"
              value="Single Post + Show when user go to new blog"
              checked={gender}
              setter={setGender}
            />
            <RadioInput
              label="Show when user go to new blog"
              value="Show when user go to new blog"
              checked={gender}
              setter={setGender}
            />
          </div>
          <div>
            {" "}
            <span className="w-full ">
              <label className="ml-4 text-xs uppercase font-bold">
                Add link where user will go after on click
              </label>
              <span className=" w-full text-sm flex items-center border rounded-xl mt-3 hover:border-primary border-gray-300 bg-white ">
                <input
                  type="url"
                  required
                  placeholder="Website url"
                  className="font-medium w-full px-1 ml-2 py-2 focus:outline-none form-control "
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </span>
            </span>
          </div>
          <div className="flex justify-between items-center mt-8 lg:mt-16 w-full px-4">
            <div></div>{" "}
            <button
              type="submit"
              className="bg-primary text-lg font-bold text-white px-4 py-2 rounded-md "
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Uploads;
