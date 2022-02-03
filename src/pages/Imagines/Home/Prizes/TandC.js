import React from "react";
import Navbar from "../../../../components/Navbar";

const TandC = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center items-center">
        <div className="max-w-4xl w-full px-4 py-4 font-Mulish text-gray-700">
          <div className="text-3xl font-extrabold text-gray-600 my-5 mx-2 flex justify-center items-center">
            Terms and Conditions
          </div>
          <div className="text-xl leading-relaxed">
            Circlevyos is a free social media platform for readers, writers,
            voice artists and sound creators. we don't charge you to use
            Circlevyos and we don't sell your personal data.
          </div>
          <div className="text-xl leading-relaxed mt-4">
            On Circlevyos we believe in freedom of speech and expressing your
            uniqueness with your content. To facilitate a fruitful platform we
            are strictly against any abusive content that harasses or intented
            to degrade others which can result to emotional and physical
            hardships
          </div>
          <div className="text-xl leading-relaxed mt-4">
            <span className="text-xl font-bold">!~Important~!</span>
            <br />
            All the users of this platform must get acknowledged with the fact
            that any post which is abusive or intented to degrade others will be
            notified and deleted from circlevyos by our team if others report it
            maximum times.
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TandC;
