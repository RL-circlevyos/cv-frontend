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

import { useDispatch } from "react-redux";
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
/**  import BlogDetails from "./pages/Blog/CreateBlog/BlogDetails";*/
/**  import Global from "./pages/Leaderboard/Global";*/
import { AuthState } from "./store/apps/auth/auth-action";
import { useEffect } from "react";
import { blogFetchAction } from "./store/apps/blogs/blog-action";
import { generalImagineFetchAction } from "./store/apps/imagines/imagine-action";
import ImagineList from "./pages/Imagines/Home/General/ImagineList";
import Marketplace from "./pages/Marketplace/Marketplace";
import ConBlogs from "./pages/UserProfile/Contribution/ConBlogs";
import ConImagines from "./pages/UserProfile/Contribution/ConImagines";
import SavedBlogs from "./pages/UserProfile/Saved/SavedBlogs";
import SavedImagines from "./pages/UserProfile/Saved/SavedImagines";
import Selection from "./pages/Authentication/Selection/Selection";
import Trending from "./pages/Imagines/Home/General/Trending";
import ImagineDetails from "./pages/Imagines/General-Imagines/Create/ImagineDetails";
import Share from "./pages/Imagines/General-Imagines/Create/Share";
import Intro from "./pages/Imagines/Story-Imagines/Create/Intro/Intro";
import Form from "./pages/Imagines/Story-Imagines/Create/Intro/Form";
import StoryDetails from "./pages/Imagines/Story-Imagines/Create/Intro/StoryDetails";
import PartsList from "./pages/Imagines/Story-Imagines/Create/StoryParts/PartsList";
import PartForm from "./pages/Imagines/Story-Imagines/Create/StoryParts/PartForm";
import Start from "./pages/Imagines/General-Imagines/Create/Start";
import StoryList from "./pages/Imagines/Home/Story/StoryList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(AuthState());
      dispatch(generalImagineFetchAction());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  /**const auth = useSelector((state) => state.auth);*/

  /**  if (!!!auth.userid) {*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<ImagineList />} />
        <Route path="/selection" element={<Selection />} />
        {/* <Route path="/imagines/:id" element={<Imagine />} /> */}
        <Route path="/blog/:blogid" element={<SingleBlog />} />
        <Route path="/createblog" element={<Create />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/create-general-imagine" element={<CreateImagines />} />
        <Route path="/imagine-details" element={<ImagineDetails />} />
        <Route path="/share" element={<Share />} />
        {/* <Route path="/imagines" element={<ImagineList />} /> */}
        <Route path="/general-imagines/:id" element={<GeneralImagines />} />
        <Route path="/general-imagines/myimagines" element={<Start />} />
        <Route path="/story-imagines" element={<StoryList />} />
        <Route path="/story-imagines/:id" element={<StoryImagines />} />
        <Route path="/story-imagines/myimagines" element={<Intro />} />
        <Route path="/story-imagines/myimagines/:id" element={<PartsList />} />
        <Route
          path="/story-imagines/myimagines/:id/create"
          element={<PartForm />}
        />
        <Route path="/story-imagines/story-intro" element={<Form />} />
        <Route
          path="/story-imagines/story-intro/details"
          element={<StoryDetails />}
        />
        {/* <Route
            path="/create-story-imagine"
            element={<CreateStoryImagines />}
          /> */}

        <Route
          path="/contribution/profile-imagines/:id"
          element={<ConImagines />}
        />
        <Route path="/contribution/profile-blogs" element={<ConBlogs />} />
        <Route path="/saved/profile-blogs" element={<SavedBlogs />} />
        <Route path="/saved/profile-imagines/:id" element={<SavedImagines />} />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/trendings" element={<Trending />} />

        <Route path="/ad/revenue" element={<Revenue />} />
        <Route path="/ad/ad-category" element={<Ad />} />
        <Route path="/ad/dashboard" element={<Dashboard />} />
        <Route path="/ad/advertise" element={<Advertise />} />
        <Route path="/ad/audience" element={<Audience />} />
        <Route path="/ad/budget" element={<Budget />} />
        <Route path="/ad/payment" element={<Payment />} />
        <Route path="/ad/others" element={<Others />} />
        <Route path="/ad/uploads" element={<Uploads />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/leaderboard-global" element={<Global />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
