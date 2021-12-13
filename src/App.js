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

const userId = true;

function App() {
  let routes;
  if (!!!userId) {
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
          <Route path="/imagines" element={<Imagine />} />
          <Route path="/singleblog" element={<SingleBlog />} />
          <Route path="/createblog" element={<Create />} />
          <Route path="/create-general-imagine" element={<CreateImagines />} />
          <Route
            path="/create-story-imagine"
            element={<CreateStoryImagines />}
          />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* </div> */}
      </>
    );
  }
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
