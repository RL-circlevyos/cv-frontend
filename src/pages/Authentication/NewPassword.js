import React, { useCallback, useState } from "react";
import resetlogo from "../../assets/secure.svg";
import { useForm } from "react-hook-form";
import { CheckCircle, Key } from "react-feather";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAction } from "../../store/apps/auth/auth-action";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not exceed 16 characters"),
  newPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must not exceed 16 characters"),
  // confirmPassword: yup
  //   .string()
  //   .required("Confirm Password is required")
  //   .oneOf([yup.ref("newPassword"), null], "Passwords does not match"),
});

const NewPassword = () => {
  const auth = useSelector((state) => state.auth);

  const user = auth.userid;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (data) => {
      const passwordBody = {
        oldPassword: data.confirmPassword,
        password: data.newPassword,
      };

      dispatch(changePasswordAction(passwordBody));

      reset();
      navigate(`/settings/${user}`);
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

  /**  const [confirmsPassword, setConfirmsPassword] = useState(false);
  // const confirm = () => {
  //   if (!confirmsPassword) {
  //     setConfirmsPassword(true);
  //   }

  //   if (confirmsPassword) {
  //     setConfirmsPassword(false);
  //   }
  // };*/

  return (
    <>
      <div className="flex justify-center items-start md:space-x-6 bg-white pb-5">
        <div className="hidden md:grid place-items-center w-full h-screen font-Mulish ">
          <div className="mt-6 h-5/6 shadow-lg rounded-lg grid place-items-center px-5 py-4 pb-6 ml-7">
            <div className="text-xl lg:text-2xl font-medium text-gray-500 px-6">
              <p>
                Password must contain a minimum of 8 characers and a maximum of
                16 characters.
              </p>
            </div>
            <div className="w-84 h-64">
              <img
                src={resetlogo}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className=" w-full grid place-items-center font-Mulish px-4 pb-4">
          <div className="flex md:w-10/12 h-screen text-primary space-y-7 pt-6 flex-col md:pt-24">
            <span className="grid place-items-center mt-1">
              <div className="w-full md:hidden px-4">
                <img
                  src={resetlogo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold md:text-4xl tracking-normal pb-10 mt-4">
                Set Your New Password
              </span>
              <form
                className="flex flex-col md:w-9/12 text-base items-center w-full space-y-6 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <span className="w-full ">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Key />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${
                        errors.oldPassword && "invalid"
                      }`}
                      type={passwordShown ? "text" : "password"}
                      name="oldPassword"
                      placeholder="old password"
                      {...register("oldPassword")}
                      onKeyUp={() => {
                        trigger("oldPassword");
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

                  <small className="text-pink-600">
                    {errors.oldPassword?.message}
                  </small>
                </span>

                <span className="w-full ">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <CheckCircle />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${
                        errors.newPassword && "invalid"
                      }`}
                      type={passwordShown ? "text" : "password"}
                      name="newPassword"
                      placeholder="new password"
                      {...register("newPassword")}
                      onKeyUp={() => {
                        trigger("newPassword");
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

                  <small className="text-pink-600">
                    {errors.newPassword?.message}
                  </small>
                </span>
                {/**  <span className="w-full pb-8">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Lock />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${
                        errors.confirmPassword && "invalid"
                      }`}
                      type={confirmsPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="confirm password"
                      {...register("confirmPassword")}
                      onKeyUp={() => {
                        trigger("confirmPassword");
                      }}
                    />
                    {confirmsPassword ? (
                      <EyeIcon
                        onClick={confirm}
                        className="h-7 w-7 cursor-pointer"
                      />
                    ) : (
                      <EyeOffIcon
                        onClick={confirm}
                        className="h-7 w-7 cursor-pointer"
                      />
                    )}
                  </span>

                  <small className="text-pink-600">
                    {errors.confirmPassword?.message}
                  </small>
                </span> */}
                <button
                  type="submit"
                  className="px-6 py-3 w-full bg-gradient-to-r from-primary to-gray-700 
                   font-bold rounded-xl text-grey-200 text-base lg:text-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-primary "
                >
                  Update Password
                </button>
                <div className=" grid place-items-center text-sm space-y-2 lg:space-y-6 font-bold">
                  <span className="flex items-center text-sm text-grey-400 lg:text-base">
                    {" "}
                    Back to
                    <Link exact to={`/settings/${user}`}>
                      {" "}
                      <span className="text-primary hover:underline text-base lg:text-base ml-3 cursor-pointer">
                        Settings
                      </span>
                    </Link>
                  </span>
                </div>
              </form>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(NewPassword);
