import React from 'react';
import { AppBar, Toolbar, ButtonBase, Typography, Fab } from '@material-ui/core';
import logo from './icons/about.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function AppHeader(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <Link to="/about/">
            <Fab color="primary" aria-label="About Me">
              <img src={logo} alt="Logo"/>
              About Me
            </Fab>
          </Link>
        </div>
        <div>
          <Link to="/home/">Home</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
} 

export default AppHeader;