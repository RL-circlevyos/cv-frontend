import { useState, useCallback } from "react";
import {
  ArrowDownIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronDown } from "react-feather";
import AlertDialogSlide from "../../../../components/Dialog";

export default function DropdownImagine() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const [show, setShow] = useState(false);
  const handleOpen = useCallback(() => {
    setShow(!show);
  }, [show]);
  const auth = useSelector((state) => state.auth);
  const user = auth.userid;
  const crImagine = useCallback(() => {
    user ? navigate("/create-imagine") : handleClickOpen();
  }, [user, navigate, handleClickOpen]);
  const crShorts = useCallback(() => {
    user ? navigate("/create-shorts") : handleClickOpen();
  }, [user, navigate, handleClickOpen]);

  return (
    <div className="relative inline-block text-left font-Mulish w-full">
      <div>
        <button
          onClick={handleOpen}
          to="/create-general-imagine"
          className="flex items-center py-2 px-6 w-full font-bold mt-1 rounded-2xl transition duration-200 bg-primary 
                  text-gray-100 focus:bg-cyan-900 dark:hover:bg-cyan-900 hover:bg-teal-800 hover:text-gray-100"
        >
          Create-Imagines
          <ChevronDownIcon className="h-5 w-5 ml-2" />
        </button>
      </div>

      {show && (
        <div
          className="origin-top-right absolute z-50 font-Mulish right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black 
        ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-base"
        >
          <div className="py-1">
            <div>
              <div
                onClick={crShorts}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold cursor-pointer"
              >
                Short Blocks
              </div>
            </div>
          </div>
          <div className="py-1">
            <div>
              <div
                onClick={crImagine}
                className="bg-gray-50 text-primary hover:bg-primary hover:text-white block px-4 py-2 font-bold cursor-pointer"
              >
                Big Blocks
              </div>
            </div>
          </div>
        </div>
      )}
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}
        title="Login to Circlevyos"
        content="To get your own access on different contents you should signin first"
        link="/login"
        show={true}
      />
    </div>
  );
}
