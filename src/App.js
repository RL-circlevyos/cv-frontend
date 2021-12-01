import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
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

const userId = true;

function App() {
  let routes;
  if (!!!userId) {
    routes = (
      <>
        {/******* 🚀 auth ***** */}
        <Routes>
          <Route path="/login" element={<Login />} />
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
        <div className="w-full fixed h-screen">
          <Navbar />
          <div className="mb-8">
            <Routes>
              <Route path="/" element={<Blog />} />
              <Route path="/imagines" element={<Imagine />} />
              <Route path="/singleblog" element={<SingleBlog />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
