import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import dp from "../../../assets/person.png";

import { Link } from "react-router-dom";

export default function Followers({ buttonName, followers }) {
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
        <span className="flex justify-center items-center text-lg font-Mulish font-extrabold text-primary px-2 py-1 ">
          Followers
        </span>
        <hr />
        {followers?.map((follower, index) => (
          <div
            className="text-base font-Mulish text-gray-700 px-4 py-3 cursor-pointer hover:bg-gray-200"
            key={index}
          >
            <Link to={`/profile/${follower._id}`}>
              <div className="flex items-start justify-center w-full">
                <div>
                  <img
                    src={
                      follower?.photo?.secure_url
                        ? follower.photo?.secure_url
                        : dp
                    }
                    alt="dp"
                    className="w-11 h-11 object-cover rounded-full border border-gray-400"
                  />
                </div>
                <div className="flex flex-col w-3/4 ml-2">
                  <span className="font-bold">{follower.name}</span>
                  <span className="text-sm truncate text-gray-400">
                    {follower.email}
                  </span>
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
            className="text-sm text-primary bg-green-50 py-2 px-1 cursor-pointer"
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
