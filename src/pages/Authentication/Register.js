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

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

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
  // .matches("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,}))

  // phone: yup
  //   .string()
  //   .required("Phone number is required")
  //   .matches(phoneRegExp, "Phone number is not valid"),

  acceptTerms: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      dispatch(signUpWithNameEmailAndPassword(data));
      reset();
      navigate("/");
    },
    [reset, dispatch, navigate]
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
                  {/**  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
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
                  </span> */}
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 hover:border-primary border-gray-300 bg-white ">
                    {" "}
                    <UserIcon className="h-6 w-6" />
                    <input
                      type="text"
                      placeholder="User Name"
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none  form-control ${
                        errors.name && "invalid"
                      }`}
                      {...register("name")}
                      onKeyUp={() => {
                        trigger("name");
                      }}
                    />
                  </span>
                  {errors.name && (
                    <small className="text-pink-600">
                      {errors.name.message}
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
                <div className="flex items-center justify-between w-full">
                  {" "}
                  <div className="w-full block">
                    <div className="flex items-center">
                      <input
                        name="acceptTerms"
                        type="checkbox"
                        {...register("acceptTerms")}
                        id="acceptTerms"
                        className={`form-check-input ${
                          errors.acceptTerms ? "is-invalid" : ""
                        }`}
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="ml-2 form-check-label"
                      >
                        Accept Terms & Conditions
                      </label>
                    </div>
                    <small className="text-pink-600">
                      {errors.acceptTerms?.message}
                    </small>
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
