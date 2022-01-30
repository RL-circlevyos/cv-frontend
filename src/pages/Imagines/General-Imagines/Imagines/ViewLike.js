import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import dp from "../../../../assets/person.png";

import { Link } from "react-router-dom";
import { LightBulbIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";

export default function ViewLike({ buttonName, viewLikes }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <span className="flex justify-center items-center text-base font-Mulish font-extrabold text-primary px-2 py-1 ">
          See who appreciates you
        </span>
        <hr />
        {viewLikes?.length === 0 && (
          <div className="text-center text-sm italic mt-5 text-gray-700 font-bold">
            No Appreciates till now
          </div>
        )}
        {viewLikes?.map((view, index) => (
          <div
            className="text-base font-Mulish text-gray-700 px-4 py-3 cursor-pointer hover:bg-gray-200 mt-5"
            key={index}
          >
            <Link to={`/profile/${view}`}>
              <div className="flex items-center justify-center w-full">
                <div className="w-1/5">
                  <img
                    src={view?.photo?.secure_url ? view.photo?.secure_url : dp}
                    alt="dp"
                    className="w-8 h-8 object-cover rounded-full border border-gray-400"
                  />
                </div>
                <div className="flex flex-col w-2/3 ml-2 ">
                  <span className="font-bold text-xs truncate">{view}</span>
                </div>
                <div className="flex w-1/5">
                  <LightBulbIcon className="h-5 w-5 ml-2 text-yellow-400" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span
            className="text-sm text-primary py-2 px-1 cursor-pointer"
            onClick={toggleDrawer(anchor, true)}
          >
            {buttonName}
          </span>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
