import React, { useCallback, useState } from "react";
import resetlogo from "../../assets/reset.svg";
import { useForm } from "react-hook-form";
import { Key, Lock } from "react-feather";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../../store/apps/auth/auth-action";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isLength, isMatch } from "../../utility/validation/Validation";
import axios from "axios";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utility/notification/Notification";

const initialState = {
  password: "",
  cf_password: "",
  err: "",
  success: "",
};

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [data, setData] = useState(initialState);
  const navigate = useNavigate();
  const { password, cf_password, err, success } = data;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, err: "", success: "" });
  };

  const handleResetPass = async (e) => {
    e.preventDefault();
    if (isLength(password))
      return setData({
        ...data,
        err: "Password must be atleast 6",
        success: "",
      });

    if (!isMatch(password, cf_password))
      return setData({
        ...data,
        err: "Password didn't match",
        success: "",
      });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/reset`,
        { password },
        {
          headers: { Authorization: resetToken },
        }
      );

      return setData({ ...data, err: "", success: res.data.msg });
    } catch (err) {
      err.response.data.msg &&
        setData({ ...data, err: err.response.data.msg, success: "" });
    }
  };

  const dispatch = useDispatch();

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

  const [confirmsPassword, setConfirmsPassword] = useState(false);
  const confirm = () => {
    if (!confirmsPassword) {
      setConfirmsPassword(true);
    }

    if (confirmsPassword) {
      setConfirmsPassword(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-start md:space-x-6 bg-white">
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
        <div className=" w-full grid place-items-center font-Mulish ">
          <div className="flex md:w-10/12 h-screen text-primary space-y-7 pt-6 flex-col md:pt-24">
            <span className="grid place-items-center">
              <div className="w-48 h-40 md:hidden">
                <img
                  src={resetlogo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold md:text-4xl tracking-normal pb-10">
                Reset Your Password
              </span>
              {err && showErrMsg(err)}
              {success && showSuccessMsg(success)}

              <form className="flex flex-col md:w-9/12 text-base items-center w-full space-y-6 ">
                <span className="w-full ">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Key />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control `}
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="New password"
                      value={password}
                      onChange={handleChangeInput}
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
                <span className="w-full pb-8">
                  <span className="w-full flex items-center border rounded-xl px-4 py-2 border-gray-300 hover:border-primary bg-white">
                    <Lock />
                    <input
                      className={`font-medium w-full px-4 ml-2 py-2 focus:outline-none form-control ${"invalid"}`}
                      type={confirmsPassword ? "text" : "password"}
                      name="cf_password"
                      id="cf_password"
                      placeholder="Confirm password"
                      value={cf_password}
                      onChange={handleChangeInput}
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
                </span>
                {!success ? (
                  <button
                    onClick={handleResetPass}
                    type="submit"
                    className="px-6 py-3 w-full bg-gradient-to-r from-primary to-gray-700 
                   font-bold rounded-xl text-grey-200 text-base lg:text-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-primary "
                  >
                    Update Password
                  </button>
                ) : (
                  <span
                    className="px-6 py-3 w-full bg-gradient-to-r from-primary to-gray-700 
                  font-bold rounded-xl text-grey-200 text-base text-center lg:text-xl hover:bg-gradient-to-r hover:from-gray-700 hover:to-primary "
                  >
                    {" "}
                    <Link to="/login">Login Now</Link>
                  </span>
                )}
              </form>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(ResetPassword);
