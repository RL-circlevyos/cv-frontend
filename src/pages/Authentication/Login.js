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

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid Email"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not exceed 16 characters"),
});

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      dispatch(LoginWithNameEmailAndPassword(data));
      reset();
      navigate("/");
    },
    [reset, dispatch, navigate]
  );
  /**  console.log(errors);*/

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
              <form
                className="flex flex-col md:w-9/12 text-base items-center w-full space-y-4 lg:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <span className="w-full">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    <Mail />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none  form-control ${
                        errors.email && "invalid"
                      }`}
                      type="email"
                      name="email"
                      placeholder="Email"
                      {...register("email")}
                      onKeyUp={() => {
                        trigger("email");
                      }}
                    />
                  </span>
                  {errors.email && (
                    <small className="text-pink-600">
                      {errors.email.message}
                    </small>
                  )}
                </span>{" "}
                <span className="w-full pb-8">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Key />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${
                        errors.password && "invalid"
                      }`}
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      {...register("password")}
                      onKeyUp={() => {
                        trigger("password");
                      }}
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
                  {errors.password && (
                    <small className="text-pink-600">
                      {errors.password.message}
                    </small>
                  )}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Login);
