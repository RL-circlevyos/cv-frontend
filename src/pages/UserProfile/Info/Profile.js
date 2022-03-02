import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../../../components/Navbar";
import SkeletonImagines from "../../../components/SkeletonLoader/SkeletonImagines";
import {
  AuthState,
  userDetailsAction,
} from "../../../store/apps/auth/auth-action";
import { authAction } from "../../../store/apps/auth/auth-slice";
import List from "../Contribution/Imagines/List";
import Intro from "./Intro";

const Profile = ({ token, isLogged }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { id } = useParams();

  useEffect(() => {
    // dispatch(userDetailsAction(id, token));
  }, [dispatch, token, id]);
  const ui = useSelector((state) => state.ui);

  return (
    <div className="w-full">
      <Navbar />
      <Intro />

      <div className="flex justify-center items-center">
        <div className="mt-4 w-full max-w-7xl">
          <div className="font-Mulish flex flex-wrap items-start justify-between space-x-6 w-full mt-6 pb-8 overflow-x-hidden">
            <List />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default React.memo(Profile);
