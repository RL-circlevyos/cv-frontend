import { useState, useCallback } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dp from "../assets/person.png";
import DelPopup from "./DelPopup";
import { logoutAction } from "../store/apps/auth/auth-action";
import TextareaDialog from "./Feedback/TextareaDialog";
import axios from "axios";

export default function Example() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleOpen = useCallback(() => {
    setShow(!show);
  }, [show]);
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [del, setDel] = useState(false);
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    setDel(true);
  }, []);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);
  /******* feedback states *****/
  const [feedback, setFeedback] = useState(false);
  const handlefeedbackOpen = useCallback(() => {
    setFeedback(true);
  }, []);
  const handlefeedbackClose = useCallback(() => {
    setFeedback(false);
    setShow(false);
  }, []);
  const [textareaValue, setTextareaValue] = useState("");
  const submitTextareaValue = () => {
    const feedbackContent = {
      feedback: textareaValue,
    };
    console.log(feedbackContent);
    setTextareaValue("");
    setFeedback(false);
    setShow(false);
  };

  const handleLogout = async () => {
    try {
      await axios.get("/api/v1/logout");
      localStorage.removeItem("firstlogin");
      window.location.href = "/login";
    } catch (err) {
      window.location.href = "/";
    }
  };
  /******* feedback states end*****/
  return (
    <div className="relative inline-block text-left font-Mulish">
      <div>
        <div
          onClick={handleOpen}
          className="bg-white text-primary hover:bg-primary hover:text-white rounded shadow flex items-center px-2 py-2 cursor-pointer"
        >
          <img
            // TODO: NEED USER DETAILS
            src={
              user === auth?.userDetails?._id &&
              auth?.userDetails?.photo?.secure_url
                ? auth?.userDetails?.photo?.secure_url
                : dp
            }
            alt="dp"
            className="w-7 h-7 rounded-full object-cover"
          />
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      {show && (
        <div
          className="origin-top-right absolute z-50 font-Mulish right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black 
        ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-base"
        >
          <div className="py-1">
            <div>
              <Link
                to={`/profile/${auth.userDetails._id}`}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="py-1">
            <div>
              <Link
                to={`/settings/${auth.userDetails._id}`}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              >
                Settings
              </Link>
            </div>
          </div>
          <div className="py-1">
            <Link
              to="/cv/termsandcondition"
              className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              onClick={handlefeedbackOpen}
            >
              Terms & Conditions
            </Link>
          </div>
          <div className="py-1">
            <div
              className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold cursor-pointer"
              onClick={handlefeedbackOpen}
            >
              Feedback
            </div>
          </div>

          <div className="py-1">
            {/* <div>
              <div
                onClick={logout}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              >
                Logout
              </div>
            </div> */}
            <div>
              <div
                onClick={handleLogout}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold cursor-pointer"
              >
                Logout
              </div>
            </div>
            <DelPopup
              open={del}
              handleClose={handleDelClose}
              title="Logout"
              content="Do you want to logout ?"
              show={true}
              onClick={() => {
                dispatch(logoutAction());
                navigate("/login");
              }}
            />
            <TextareaDialog
              open={feedback}
              handleClose={handlefeedbackClose}
              title="Your feedback about our app"
              content={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              onClick={submitTextareaValue}
              show={true}
              color="#009E82"
            />
          </div>
        </div>
      )}
    </div>
  );
}
