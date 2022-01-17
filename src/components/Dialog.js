import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({
  open,
  handleClose,
  title,
  content,
  link,
  show,
}) {
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
        <DialogTitle
          sx={{
            fontWeight: "600",
            fontFamily: "'Mulish', sans-serif",
            color: "#e30b5d",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{
              fontWeight: "500",
              fontFamily: "'Mulish', sans-serif",
              color: "black",
              fontSize: "17px",
            }}
          >
            {content}
          </DialogContentText>
        </DialogContent>
        {show && (
          <DialogActions>
            <Button variant="contained" color="success" onClick={handleClose}>
              <Link to="/register"> Signup</Link>
            </Button>
            <Button variant="contained" color="primary">
              <Link to={link}> Login</Link>
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
