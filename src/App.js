import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/Reset-Password";

import Blog from "./pages/Blog/Blog";
import SingleBlog from "./pages/Blog/SingleBlog/SingleBlog";
import PageNotFound from "./components/PageNotFound";
import Create from "./pages/Blog/CreateBlog/Create";
import BlogDetails from "./pages/Blog/CreateBlog/BlogDetails";

import GeneralImagines from "./pages/Imagines/General-Imagines/Imagines/GeneralImagines";
import StoryImagines from "./pages/Imagines/Story-Imagines/Imagines/StoryImagines";
import CreateImagines from "./pages/Imagines/General-Imagines/Create/CreateImagines";
import CreateStoryImagines from "./pages/Imagines/Story-Imagines/Create/CreateImagines";
import CreateSImagine from "./pages/Imagines/Story-Imagines/Create/CreateStoryImagine";

import Profile from "./pages/UserProfile/Profile";
import ProfileBlog from "./pages/UserProfile/ProfileBlog";
import ProfileSavedBlogs from "./pages/UserProfile/ProfileSavedBlogs";
import ProfileSavedImagines from "./pages/UserProfile/ProfileSavedImagines";

import { useDispatch, useSelector } from "react-redux";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Global from "./pages/Leaderboard/Global";

import Ad from "./pages/Ad/Ad Category/Ad";
import Advertise from "./pages/Ad/Advertise/Advertise";
import Audience from "./pages/Ad/Audience/Audience";
import Payment from "./pages/Ad/Payment/Payment";
import Others from "./pages/Ad/Others/Others";
import Uploads from "./pages/Ad/Uploads/Uploads";
import Revenue from "./pages/Ad/Revenue/Revenue";
import Dashboard from "./pages/Ad/Dashboard/Dashboard";
import Budget from "./pages/Ad/Budget/Budget";
// import BlogDetails from "./pages/Blog/CreateBlog/BlogDetails";
// import Global from "./pages/Leaderboard/Global";
import { AuthState } from "./store/apps/auth/auth-action";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(AuthState());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  let routes;
  const auth = useSelector((state) => state.auth);
  // if (false) {
  if (!!!auth.userid) {
    routes = (
      <>
        {/******* 🚀 auth ***** */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </>
    );
  } else {
    routes = (
      <>
        {/* <div className="w-full fixed h-screen"> */}
        <Routes>
          <Route path="/" element={<Blog />} />
          {/* <Route path="/imagines/:id" element={<Imagine />} /> */}
          <Route path="/blog/:blogid" element={<SingleBlog />} />
          <Route path="/createblog" element={<Create />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/create-general-imagine" element={<CreateImagines />} />
          <Route path="/general-imagines/:id" element={<GeneralImagines />} />
          <Route path="/story-imagines/:id" element={<StoryImagines />} />
          {/* <Route
            path="/create-story-imagine"
            element={<CreateStoryImagines />}
          /> */}
          <Route path="/create-story-imagine" element={<CreateSImagine />} />

          <Route path="/ad/revenue" element={<Revenue />} />
          <Route path="/ad/ad-category" element={<Ad />} />
          <Route path="/ad/dashboard" element={<Dashboard />} />
          <Route path="/ad/advertise" element={<Advertise />} />
          <Route path="/ad/audience" element={<Audience />} />
          <Route path="/ad/budget" element={<Budget />} />
          <Route path="/ad/payment" element={<Payment />} />
          <Route path="/ad/others" element={<Others />} />
          <Route path="/ad/uploads" element={<Uploads />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-blogs" element={<ProfileBlog />} />
          <Route path="/profile-saved-blogs" element={<ProfileSavedBlogs />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/leaderboard-global" element={<Global />} />
          <Route
            path="/profile-saved-imagines"
            element={<ProfileSavedImagines />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* </div> */}
      </>
    );
  }
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
