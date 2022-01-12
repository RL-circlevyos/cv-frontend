import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/Reset-Password";

import PageNotFound from "./components/PageNotFound";

import GeneralImagines from "./pages/Imagines/General-Imagines/Imagines/GeneralImagines";
import StoryImagines from "./pages/Imagines/Story-Imagines/Imagines/StoryImagines";
import CreateImagines from "./pages/Imagines/General-Imagines/Create/CreateImagines";

import { useDispatch } from "react-redux";

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
import Trending from "./pages/Imagines/Home/General/Trending";

import Intro from "./pages/Imagines/Story-Imagines/Create/Intro/Intro";
import Form from "./pages/Imagines/Story-Imagines/Create/Intro/Form";
import StoryDetails from "./pages/Imagines/Story-Imagines/Create/Intro/StoryDetails";
import PartsList from "./pages/Imagines/Story-Imagines/Create/StoryParts/PartsList";
import PartForm from "./pages/Imagines/Story-Imagines/Create/StoryParts/PartForm";
import StoryList from "./pages/Imagines/Home/Story/StoryList";
import Saved from "./pages/Imagines/Home/Saved/SavedGeneral";
import Start from "./pages/Imagines/Series/Start";
import Cover from "./pages/Imagines/Series/Cover";
import Part from "./pages/Imagines/Series/Parts/Parts";
import Select from "./pages/Authentication/Select";
import Create from "./pages/Imagines/Series/Parts/Create";
import SavedGeneral from "./pages/Imagines/Home/Saved/SavedGeneral";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(AuthState());
      dispatch(blogFetchAction());
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
        <Route path="/select" element={<Select />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<ImagineList />} />
        <Route path="/saved/general" element={<SavedGeneral />} />
        {/* <Route path="/saved/series" element={<SavedGeneral />} /> */}

        <Route path="/create-general-imagine" element={<CreateImagines />} />

        <Route path="/general-imagines/:id" element={<GeneralImagines />} />
        {/* <Route path="/general-imagines/myimagines" element={<Start />} /> */}

        <Route path="/series/start" element={<Start />} />
        <Route path="/series/cover" element={<Cover />} />
        <Route path="/series/storyname/:id" element={<Part />} />
        <Route path="/series/storyname/:id/createpart" element={<Create />} />

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

        <Route
          path="/contribution/profile-imagines/:id"
          element={<ConImagines />}
        />
        <Route path="/contribution/profile-blogs" element={<ConBlogs />} />
        <Route path="/saved/profile-blogs" element={<SavedBlogs />} />
        <Route path="/saved/profile-imagines/:id" element={<SavedImagines />} />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/trendings" element={<Trending />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
