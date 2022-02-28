import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/Reset-Password";

import PageNotFound from "./components/PageNotFound";

import GeneralImagines from "./pages/Imagines/General-Imagines/Imagines/GeneralImagines";
/***import StoryImagines from "./pages/Imagines/Story-Imagines/Imagines/StoryImagines";*/
import CreateImagines from "./pages/Imagines/General-Imagines/Create/CreateImagines";

import { useDispatch, useSelector } from "react-redux";

import {
  AuthState,
  myDetailsAction,
  userDetailsAction,
  userImaginesAction,
} from "./store/apps/auth/auth-action";
import { useEffect } from "react";

import { generalImagineFetchAction } from "./store/apps/imagines/imagine-action";
import ImagineList from "./pages/Imagines/Home/General/ImagineList";
import Marketplace from "./pages/Marketplace/Marketplace";
import Select from "./pages/Authentication/Select/Select";

import SavedGeneral from "./pages/Imagines/Home/Saved/SavedGeneral";
import Upcoming from "./pages/Imagines/Home/Story/Upcoming";
import GeneralUpdate from "./pages/Imagines/Update/GeneralUpdate";
import Profile from "./pages/UserProfile/Info/Profile";
import Settings from "./pages/UserProfile/Info/Settings";
import NewPassword from "./pages/Authentication/NewPassword";
import Process from "./pages/Imagines/Home/Prizes/Process";
import TandC from "./pages/Imagines/Home/Prizes/TandC";
import CreateShorts from "./pages/Imagines/General-Imagines/Create/CreateShorts";
import Account from "./pages/UserProfile/Info/Account";
import ActivationEmail from "./pages/Authentication/ActivateEmail";
import axios from "axios";
import { authAction } from "./store/apps/auth/auth-slice";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLogged, token } = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstlogin");
    if (firstLogin) {
      // `${process.env.REACT_APP_API_BASE_URL}/refresh_token`,
      const getToken = async () => {
        const res = await axios.post(`api/v1/refresh_token`, null);

        dispatch(
          authAction.getTokenAdd({
            token: res.data.access_token,
          })
        );
      };
      getToken();
    }
  }, [isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(authAction.login());
      };
      getUser();
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(AuthState(token));
    // dispatch(generalImagineFetchAction(skipCount));
    // dispatch(userDetailsAction(token));
    // dispatch(userImaginesAction());
    // dispatch(myDetailsAction());
  }, [dispatch, token]);

  /**const auth = useSelector((state) => state.auth);*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
        />
        <Route path="/select" element={<Select />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user/reset/:resetToken" element={<ResetPassword />} />
        <Route path="/new-password/:id" element={<NewPassword />} />

        <Route path="/" element={<ImagineList />} />
        <Route path="/saved/general" element={<SavedGeneral />} />
        <Route path="/cv/offers/detail-procedure" element={<Process />} />
        <Route path="/cv/termsandcondition" element={<TandC />} />

        <Route path="/create-imagine" element={<CreateImagines />} />
        <Route path="/create-shorts" element={<CreateShorts />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/feedback/:id" element={<Settings />} />
        <Route path="/:id" element={<GeneralImagines />} />
        <Route path="/:id/update" element={<GeneralUpdate />} />

        <Route path="/series" element={<Upcoming />} />
        <Route path="/marketplace" element={<Marketplace />} />
        {/* <Route path="/trendings" element={<Trending />} /> */}

        {/* account details */}
        <Route path="/ac/:acid" element={<Account />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
