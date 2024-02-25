import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const OptionsButton = ({ onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="options-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ padding: '0px', marginRight: '2px', color: '#bd2d4e' }}
        
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { onEdit(); handleClose(); }}>Editar</MenuItem>
        <MenuItem onClick={() => { onDelete(); handleClose(); }}>Excluir</MenuItem>
      </Menu>
    </div>
  );
};

export default OptionsButton;
