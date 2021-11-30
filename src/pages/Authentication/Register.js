import React, { useCallback, useState } from "react";
import registerlogo from "../../assets/register.svg";
import { useForm } from "react-hook-form";
import { Key, Mail, PhoneCall } from "react-feather";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const Register = () => {
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
      reset();
    },
    [reset]
  );
  /**  console.log(errors);*/

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
              <form
                className="flex flex-col md:w-9/12 text-base items-center w-full space-y-4 lg:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <span className="w-full ">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    {" "}
                    <PhoneCall />
                    <input
                      type="text"
                      placeholder="Phone number"
                      maxLength="10"
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none  form-control ${
                        errors.phone && "invalid"
                      }`}
                      {...register("phone")}
                      onKeyUp={() => {
                        trigger("phone");
                      }}
                    />
                  </span>
                  {errors.phone && (
                    <small className="text-pink-600">
                      {errors.phone.message}
                    </small>
                  )}
                </span>
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
                <span className="w-full pb-3 md:pb-8">
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
      </div>
    </>
  );
};

export default React.memo(Register);
