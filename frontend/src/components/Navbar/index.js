import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { History } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <div style={{ padding: '0 24px', backgroundColor: "#F5F6FA", color: "#000" }}>
        <Toolbar>
          <Typography variant="h5" component={Link} to="/dashboard" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            OCR
          </Typography>
          <IconButton color="inherit" aria-label="history" component={Link} to="/results">
            <History />
          </IconButton>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Navbar;
