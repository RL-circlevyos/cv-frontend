import { useState, useCallback } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import dp from "../assets/person.png";
import DelPopup from "./DelPopup";

export default function Example() {
  const [show, setShow] = useState(false);
  const handleOpen = useCallback(() => {
    setShow(!show);
  }, [show]);
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const [del, setDel] = useState(false);
  const logout = useCallback(() => {
    setDel(true);
  }, []);

  const handleDelClose = useCallback(() => {
    setDel(false);
  }, []);
  return (
    <div className="relative inline-block text-left font-Mulish">
      <div>
        {/* <div
          onClick={handleOpen}
          className="inline-flex justify-center w-full cursor-pointer rounded-md border font-bold
           border-gray-300 shadow-sm px-4 py-2 bg-white text-base text-primary hover:bg-primary hover:text-white focus:outline-none 
           focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
        >
          Options
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </div> */}
        <div
          onClick={handleOpen}
          className="bg-white text-primary hover:bg-primary hover:text-white rounded shadow flex items-center px-2 py-2 cursor-pointer"
        >
          <img
            src={dp}
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
                to={`/profile/${user}`}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              >
                Profile
              </Link>
            </div>
          </div>
          <div className="py-1">
            <div>
              <Link
                to={`/settings/${user}`}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              >
                Settings
              </Link>
            </div>
          </div>

          <div className="py-1">
            <div>
              <div
                onClick={logout}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold"
              >
                Logout
              </div>
            </div>
            <DelPopup
              open={del}
              handleClose={handleDelClose}
              title="Logout"
              content="Do you want to logout"
              show={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}
