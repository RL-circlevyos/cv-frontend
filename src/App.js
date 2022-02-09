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

import { useDispatch } from "react-redux";

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

/**
 *
import Trending from "./pages/Imagines/Home/General/Trending"; import ConImagines from "./pages/UserProfile/Contribution/ConImagines";
 import ConBlogs from "./pages/UserProfile/Contribution/ConBlogs";
 import SavedBlogs from "./pages/UserProfile/Saved/SavedBlogs";
import SavedImagines from "./pages/UserProfile/Saved/SavedImagines";
import Intro from "./pages/Imagines/Story-Imagines/Create/Intro/Intro";
import Form from "./pages/Imagines/Story-Imagines/Create/Intro/Form";
import StoryDetails from "./pages/Imagines/Story-Imagines/Create/Intro/StoryDetails";
import PartsList from "./pages/Imagines/Story-Imagines/Create/StoryParts/PartsList";
import PartForm from "./pages/Imagines/Story-Imagines/Create/StoryParts/PartForm";
import StoryList from "./pages/Imagines/Home/Story/StoryList";
import Saved from "./pages/Imagines/Home/Saved/SavedGeneral";
import Start from "./pages/Imagines/Series/Start";
import Cover from "./pages/Imagines/Series/Cover";
import Create from "./pages/Imagines/Series/Parts/Create";
import SinglePart from "./pages/Imagines/Series/Singles/SinglePart";
import Part from "./pages/Imagines/Series/Parts/Parts";**/
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthState());
    // dispatch(generalImagineFetchAction(skipCount));
    dispatch(userDetailsAction());
    dispatch(userImaginesAction());
    dispatch(myDetailsAction());
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

        <Route path="*" element={<PageNotFound />} />

        {/* <Route path="/general-imagines/myimagines" element={<Start />} /> */}
        {/* <Route path="/saved/series" element={<SavedGeneral />} /> */}
        {/* <Route path="/series/start" element={<Start />} />
        <Route path="/series/cover" element={<Cover />} />
        <Route path="/series/storyname/:id" element={<Part />} />
        <Route path="/series/storyname/:id/part/:id" element={<SinglePart />} />
        <Route path="/series/storyname/:id/createpart" element={<Create />} /> */}

        {/* <Route path="/story-imagines" element={<StoryList />} />
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
        /> */}

        {/* <Route path="/contribution/profile-blogs" element={<ConBlogs />} />
        <Route path="/saved/profile-blogs" element={<SavedBlogs />} />
        <Route path="/saved/profile-imagines/:id" element={<SavedImagines />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
