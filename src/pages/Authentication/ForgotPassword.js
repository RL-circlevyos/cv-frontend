import React, { useCallback, useState } from "react";
import loginlogo from "../../assets/forgot.svg";
import { useForm } from "react-hook-form";
import { Mail } from "react-feather";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isEmail } from "../../utility/validation/Validation";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utility/notification/Notification";

const initialState = {
  email: "",
  err: "",
  success: "",
};

const ForgetPassword = () => {
  const [data, setData] = useState(initialState);

  const { email, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      return setData({ ...data, err: "Email is not Valid", success: "" });
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/forgotPassword`,
        { email }
      );

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  /**  console.log(errors);*/
  return (
    <>
      <div className="flex justify-center items-start md:space-x-6 bg-white">
        <div className="hidden md:grid place-items-center w-full h-screen font-Mulish ">
          <div className="mt-6 h-5/6 shadow-lg rounded-lg grid place-items-center px-5 py-4 pb-6 ml-10">
            <div className="text-2xl font-medium text-gray-500 px-7">
              <p className="leading-10">
                {" "}
                Please enter your registered email address. We'll send
                instructions to help you to reset your password.
              </p>
            </div>
            <div className="w-84 h-64">
              <img
                src={loginlogo}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" w-full grid place-items-center font-Mulish ">
          <div className="flex md:w-10/12 h-screen text-primary space-y-7 pt-6 flex-col md:pt-24">
            <span className="grid place-items-center">
              <div className="w-40 h-40 md:hidden">
                <img
                  src={loginlogo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold md:text-4xl tracking-normal pb-10">
                Forgot Password ?
              </span>
              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}
              <form className="flex flex-col md:w-9/12 text-base items-center w-full space-y-4 lg:space-y-6">
                <span className="w-full">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    <Mail />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none  form-control ${"invalid"}`}
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={handleChangeInput}
                    />
                  </span>
                </span>{" "}
                <button
                  onClick={forgotPassword}
                  type="submit"
                  className="px-6 py-3 w-full bg-gradient-to-r from-primary to-gray-700 
                   font-bold rounded-xl text-grey-200 text-base lg:text-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-primary "
                >
                  Send Reset Instructions
                </button>
              </form>
            </span>
            <div className=" grid place-items-center text-xs space-y-2 lg:space-y-6 font-bold">
              <span className="flex items-center text-sm text-grey-400 lg:text-base">
                {" "}
                Back to
                <Link exact to="/login">
                  {" "}
                  <span className="text-primary hover:underline text-base lg:text-base ml-3 cursor-pointer">
                    Login
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ForgetPassword);
