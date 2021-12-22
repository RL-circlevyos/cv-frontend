import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/Reset-Password";
import Blog from "./pages/Blog/Blog";
import Imagine from "./pages/Imagines/Imagine";
import SingleBlog from "./pages/Blog/SingleBlog/SingleBlog";
import PageNotFound from "./components/PageNotFound";
import Create from "./pages/Blog/CreateBlog/Create";
import CreateImagines from "./pages/Imagines/CreateImagine/General/CreateImagines";
import CreateStoryImagines from "./pages/Imagines/CreateImagine/Story/CreateStoryImagines";

import Revenue from "./pages/Revenue/Revenue";

import Profile from "./pages/UserProfile/Profile";
import ProfileBlog from "./pages/UserProfile/ProfileBlog";
import ProfileSavedBlogs from "./pages/UserProfile/ProfileSavedBlogs";
import ProfileSavedImagines from "./pages/UserProfile/ProfileSavedImagines";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Leaderboard from "./pages/Leaderboard/Leaderboard";

function App() {
  let routes;
  const auth = useSelector((state) => state.auth);
  if (false) {
    // if (!!!auth.userid) {
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
          <Route path="/imagines/:id" element={<Imagine />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/createblog" element={<Create />} />
          <Route path="/create-general-imagine" element={<CreateImagines />} />
          <Route
            path="/create-story-imagine"
            element={<CreateStoryImagines />}
          />

          <Route path="/revenue" element={<Revenue />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-blogs" element={<ProfileBlog />} />
          <Route path="/profile-saved-blogs" element={<ProfileSavedBlogs />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
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
