import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Hidden } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

function Navbar() {
  return (
    <AppBar position="static">
      <div style={{ padding: '0 24px', backgroundColor: "#F5F6FA", color: "#000" }}>
        <Toolbar>
          <Typography variant="h8" component={Link} to="/dashboard" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            <img src={Logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
          </Typography>
          <IconButton color="inherit" aria-label="history" component={Link} to="/results" style={{ marginRight: '5px' }}>
            <ArticleIcon />
          </IconButton>
          <Hidden smDown>
            <Typography variant="h6" component={Link} to="/results" style={{ textDecoration: 'none', color: 'inherit' }}>
              Resultados
            </Typography>
          </Hidden>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Navbar;
