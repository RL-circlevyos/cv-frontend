import * as React from "react";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { DuplicateIcon } from "@heroicons/react/outline";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShareDialog({ open, handleClose, title, content }) {
  const handleClick = (newState) => () => {
    copy(content);
    toast.info("the link is copied");
    handleClose();
  };
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          {" "}
          <DialogTitle
            sx={{
              fontWeight: "600",
              fontFamily: "'Mulish', sans-serif",
              color: "#e30b5d",
            }}
          >
            {title}
          </DialogTitle>
          <DuplicateIcon
            onClick={handleClick({
              vertical: "top",
              horizontal: "center",
            })}
            className="h-6 w-6 cursor-pointer"
          />
        </div>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              fontWeight: "500",
              fontFamily: "'Mulish', sans-serif",
              color: "black",
              fontSize: "17px",
            }}
          >
            {content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
