import React, { useCallback, useState } from "react";
import registerlogo from "../../assets/register.svg";
import { useForm } from "react-hook-form";
import { Key, Mail } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon, UserIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signUpWithNameEmailAndPassword } from "../../store/apps/auth/auth-action";
import { ToastContainer } from "react-toastify";
import {
  isEmail,
  isEmpty,
  isLength,
  isMatch,
} from "../../utility/validation/Validation";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utility/notification/Notification";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialState);

  const { name, email, password, cf_password, err, success } = user;

  const handlChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmpty(name) || isEmpty(password))
      return setUser({
        ...user,
        err: "Please fill in all fields.",
        success: "",
      });

    if (!isEmail(email))
      return setUser({ ...user, err: "Invalid emails.", success: "" });

    if (isLength(password))
      return setUser({
        ...user,
        err: "Password must be at least 6 characters.",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setUser({ ...user, err: "Password did not match.", success: "" });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/signup`,
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setUser({ ...user, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const view = () => {
    if (!passwordShown) {
      setPasswordShown(true);
    }

    if (passwordShown) {
      setPasswordShown(false);
    }
  };
  return (
    <>
      <div className="flex justify-center items-start md:space-x-6 bg-white">
        <div className="hidden md:grid place-items-center w-full h-screen font-Mulish ">
          <div className="mt-6 h-5/6 shadow-lg rounded-lg grid place-items-center px-5 py-4 pb-6">
            <div className="text-xl lg:text-3xl  text-gray-500">
              {" "}
              <p className="text-lg lg:text-2xl text-gray-500 px-6">
                <b className="text-primary text-2xl lg:text-4xl not-italic">
                  CircleVyos
                </b>{" "}
                &nbsp;is a social platform where you can explore, learn,
                contribute and earn.
              </p>
            </div>
            <div className="w-84 h-64">
              <img
                src={registerlogo}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" w-full grid place-items-center font-Mulish ">
          <div className="flex md:w-10/12 h-screen text-primary space-y-7 pt-6 flex-col md:pt-24">
            <span className="grid place-items-center">
              <div className="w-52 h-44 md:hidden">
                <img
                  src={registerlogo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold md:text-4xl tracking-normal pb-10">
                Registration
              </span>
              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}

              <form
                className="flex flex-col md:w-9/12 text-base items-center w-full space-y-4 lg:space-y-6"
                onSubmit={handleSubmit}
              >
                <span className="w-full ">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    {" "}
                    <UserIcon className="h-6 w-6" />
                    <input
                      type="text"
                      placeholder="User Name"
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none  form-control ${"invalid"}`}
                      id="name"
                      value={name}
                      name="name"
                      onChange={handlChangeInput}
                    />
                  </span>
                </span>
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
                      onChange={handlChangeInput}
                    />
                  </span>
                </span>{" "}
                <span className="w-full pb-3 pt-3 md:pb-8 ">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Key />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${"invalid"}`}
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      id="password"
                      value={password}
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
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 mt-3 border-gray-300 hover:border-primary bg-white">
                    <Key />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${"invalid"}`}
                      type={passwordShown ? "text" : "password"}
                      name="cf_password"
                      placeholder="confirm password"
                      id="cf_password"
                      value={cf_password}
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
                <div className="flex items-center justify-between w-full">
                  {" "}
                  <div className="w-full block">
                    <div className="flex items-center">
                      <input
                        name="acceptTerms"
                        type="checkbox"
                        id="acceptTerms"
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="ml-2 form-check-label"
                      >
                        Accept Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/cv/termsandcondition"
                    className="shadow px-1 py-1 font-bold cursor-pointer"
                  >
                    Details
                  </Link>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 w-full bg-gradient-to-r from-primary to-gray-700 
                   font-bold rounded-xl text-grey-200 text-base lg:text-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-primary "
                >
                  Register
                </button>
              </form>
            </span>
            <div className=" grid place-items-center text-sm space-y-2 lg:space-y-6 font-bold">
              <span className="flex items-center text-sm text-grey-400 lg:text-base">
                {" "}
                Already have an account?
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
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

export default React.memo(Register);
