import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import dp from "../../../../assets/person.png";

import { Link } from "react-router-dom";
import { LightBulbIcon } from "@heroicons/react/solid";

export default function ViewLike({ buttonName, viewLikes }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const likes = viewLikes.length;
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
            className="text-base font-Mulish text-gray-700 px-4 py-2 cursor-pointer hover:bg-gray-200"
            key={index}
          >
            <Link to={`/profile/${view._id}`}>
              <div className="flex items-center justify-center w-full">
                <div className="w-1/5">
                  <img
                    src={view?.photo?.secure_url ? view.photo?.secure_url : dp}
                    alt="dp"
                    className="w-8 h-8 object-cover rounded-full border border-gray-400"
                  />
                </div>
                <div className="flex flex-col w-2/3 ml-2 ">
                  <span className="font-bold text-xs truncate">
                    {view.name}
                  </span>
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
            className="text-sm text-primary px-1 flex cursor-pointer"
            onClick={toggleDrawer(anchor, true)}
          >
            <span className="flex items-start">
              {viewLikes?.slice(0, 3).map((i) => (
                <>
                  <div className="text-center text-sm flex items-center italic mt-5 text-gray-700 font-bold">
                    <img
                      src={i?.photo?.secure_url ? i.photo?.secure_url : dp}
                      alt="dp"
                      className="w-7 h-7 object-cover rounded-full border border-gray-200"
                    />
                  </div>
                </>
              ))}
              {likes != null && likes >= 1 && likes <= 3 ? (
                <div className="text-center text-sm flex items-center italic mt-5 ml-2 font-bold">
                  {likes} person appreciates the imagine
                </div>
              ) : (
                <>
                  {likes >= 3 && (
                    <div className="text-left text-sm italic mt-5 font-bold ml-2">
                      +{viewLikes?.slice(3, likes).length} more people
                      appreciates
                    </div>
                  )}
                </>
              )}
            </span>
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
