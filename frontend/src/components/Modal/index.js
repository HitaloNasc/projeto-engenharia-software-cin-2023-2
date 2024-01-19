import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

const Modal = ({ isOpen, onClose, title, children, padding }) => {
  const customContentStyle = {
    padding: padding
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent style={customContentStyle}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
