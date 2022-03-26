import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";

import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ResetPassword from "./pages/Authentication/Reset-Password";

import PageNotFound from "./components/PageNotFound";

import GeneralImagines from "./pages/Imagines/General-Imagines/Imagines/GeneralImagines";

import CreateImagines from "./pages/Imagines/General-Imagines/Create/CreateImagines";

import { useDispatch, useSelector } from "react-redux";

import { AuthState } from "./store/apps/auth/auth-action";
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
import Career from "./pages/career/Career";
import QuestionDetail from "./pages/career/QuestionDetail";
import CreatePublicQuestion from "./pages/career/qna/CreatePublicQuestion";
import CareerPrivateQuestion from "./pages/career/qna/CareerPrivateQuestion";
import MyResources from "./pages/career/myresources/MyResources";
import Course from "./pages/career/myresources/Course";
import Exams from "./pages/career/myresources/Exams";
import Books from "./pages/career/myresources/Books";
import Materials from "./pages/career/myresources/Materials";
import Work from "./pages/career/Work/Work";
import MentorRequest from "./pages/career/userRequest/MentorRequest";
import JobProviderRequests from "./pages/career/userRequest/JobProviderRequests";
import Requests from "./pages/career/qna/Requests";
import RequestQuestionDetail from "./pages/career/qna/RequestQuestionDetail";
import MyQna from "./pages/career/qna/MyQna";
import MyQnaAnsDetail from "./pages/career/qna/MyQnaAnsDetail";
import MyQnaSingleQDetail from "./components/career/qna/MyQnaSingleQDetail";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isLogged, token } = auth;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstlogin");
    if (firstLogin) {
      // `${process.env.REACT_APP_API_BASE_URL}/refresh_token`,
      const getToken = async () => {
        const res = await axios.post(
          // `/api/v1/refresh_token`,
          `${process.env.REACT_APP_API_BASE_URL}/refresh_token`,
          null,
          {
            withCredentials: true,
          }
        );

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
  }, [dispatch, token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
        />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user/reset/:resetToken" element={<ResetPassword />} />
        <Route path="/new-password/:id" element={<NewPassword />} />

        <Route path="/" element={<ImagineList />} />
        <Route path="/career-guide/qna" element={<Career />} />
        <Route path="/saved/general" element={<SavedGeneral />} />
        <Route path="/cv/offers/detail-procedure" element={<Process />} />
        <Route path="/cv/termsandcondition" element={<TandC />} />

        <Route path="/create-imagine" element={<CreateImagines />} />
        <Route path="/create-shorts" element={<CreateShorts />} />
        <Route
          path="/career-guide/qna/create-question"
          element={<CreatePublicQuestion />}
        />
        <Route
          path="/career-guide/qna/create-question/private"
          element={<CareerPrivateQuestion />}
        />

        <Route path="/career-guide/myresources/all" element={<MyResources />} />
        <Route path="/career-guide/myresources/courses" element={<Course />} />
        <Route path="/career-guide/myresources/exams" element={<Exams />} />
        <Route path="/career-guide/myresources/books" element={<Books />} />
        <Route
          path="/career-guide/myresources/materials"
          element={<Materials />}
        />

        <Route path="/career-guide/work" element={<Work />} />

        {/*  user requests  */}
        <Route
          path="/career-guide/mentor-request"
          element={<MentorRequest />}
        />
        <Route
          path="/career-guide/jobprovider-request"
          element={<JobProviderRequests />}
        />
        <Route path="/career-guide/qna/request" element={<Requests />} />
        <Route path="/career-guide/qna/myqna" element={<MyQna />} />
        <Route
          path="/career-guide/qna/request/:id"
          element={<RequestQuestionDetail />}
        />
        <Route
          path="/career-guide/qna/myqna/:id"
          element={<MyQnaSingleQDetail />}
        />

        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/feedback/:id" element={<Settings />} />
        <Route path="/:id" element={<GeneralImagines />} />
        <Route path="/:id/update" element={<GeneralUpdate />} />
        <Route path="/career-guide/qna/:id" element={<QuestionDetail />} />

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
