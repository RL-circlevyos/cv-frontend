import React, { useCallback, useState } from "react";
import loginlogo from "../../assets/circlevyos.svg";
import { useForm } from "react-hook-form";
import { Key, Mail } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { LoginWithNameEmailAndPassword } from "../../store/apps/auth/auth-action";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { authAction } from "../../store/apps/auth/auth-slice";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utility/notification/Notification";
import { GoogleLogin } from "react-google-login";

const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { email, password, err, success } = user;

  const handlChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };
  /**  console.log(errors);*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/login`,
        // `/api/v1/login`,
        { email, password },
        {
          withCredentials: true,
        }
      );

      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstlogin", true);
      dispatch(authAction.login());

      // history.push("/");
      navigate("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post(
        // `${process.env.REACT_APP_API_BASE_URL}/google_login`,
        `${process.env.REACT_APP_API_BASE_URL}/google_login`,

        {
          tokenId: response.tokenId,
        },
        {
          withCredentials: true,
        }
      );

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstlogin", true);
      dispatch(authAction.login());
      navigate("/");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const view = useCallback(() => {
    if (!passwordShown) {
      setPasswordShown(true);
    }

    if (passwordShown) {
      setPasswordShown(false);
    }
  }, [passwordShown]);
  return (
    <>
      <div className="flex justify-center items-start md:space-x-6 bg-white">
        <div className="hidden md:grid place-items-center w-full h-screen font-Mulish ">
          <div className="mt-6 h-5/6 shadow-lg rounded-lg grid place-items-center px-5 py-4 pb-6">
            <div className="text-xl lg:text-3xl font-semibold text-gray-500">
              Welcome to &nbsp;
              <b className="text-primary text-2xl lg:text-4xl">CircleVyos</b>
            </div>
            <div className="w-64 h-64">
              <img
                src={loginlogo}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-lg lg:text-2xl text-gray-500 italic px-6">
                Adventure from zero to success with creating assets....
              </p>
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
                Login To Your Account
              </span>
              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}
              <form
                className="flex flex-col md:w-9/12 text-base items-center w-full space-y-4 lg:space-y-6"
                onSubmit={handleSubmit}
              >
                <span className="w-full">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    <Mail />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none  form-control ${"invalid"}`}
                      type="email"
                      name="email"
                      placeholder="Email"
                      id="email"
                      onChange={handlChangeInput}
                    />
                  </span>
                </span>{" "}
                <span className="w-full pb-8">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Key />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${"invalid"}`}
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      id="password"
                      onChange={handlChangeInput}
                    />
                    {passwordShown ? (
                      <EyeIcon
                        onClick={view}
                        className="h-7 w-7 cursor-pointer"
                      />
                    ) : (
                      <EyeOffIcon
                        onClick={view}
                        className="h-7 w-7 cursor-pointer"
                      />
                    )}
                  </span>
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 w-full bg-gradient-to-r from-primary to-gray-700 
                   font-bold rounded-xl text-grey-100 text-base lg:text-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-primary "
                >
                  Login
                </button>
              </form>
            </span>
            <div className=" grid place-items-center text-sm space-y-2 lg:space-y-6 font-bold">
              <span className="flex items-center text-sm text-grey-400 lg:text-base">
                {" "}
                Don't have an account?
                <Link exact to="/register">
                  {" "}
                  <span className="text-primary hover:underline text-base lg:text-base ml-3 cursor-pointer">
                    Sign Up
                  </span>
                </Link>
              </span>

              <Link exact to="/forgot-password">
                {" "}
                <span className="text-sm text-gray-500 hover:underline lg:text-base">
                  Forgot password ?
                </span>
              </Link>

              <GoogleLogin
                clientId="1047426319195-6dndogses33r7jku9k87gkhf9esmagee.apps.googleusercontent.com"
                buttonText="Login With google"
                onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </div>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default React.memo(Login);
