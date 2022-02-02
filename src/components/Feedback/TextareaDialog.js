import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TextareaDialog({
  open,
  handleClose,
  title,
  content,
  onChange,
  onClick,
  show,
  color,
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
            color: { color },
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <textarea
              type="text"
              placeholder="write here"
              className="border border-gray-200 w-full rounded-md text-tiny text-gray-700 font-medium px-3 py-1 font-Mulish"
              rows={4}
              value={content}
              onChange={onChange}
            />
          </DialogContentText>
        </DialogContent>
        {show && (
          <DialogActions>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={onClick} variant="contained" color="success">
              Submit
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
