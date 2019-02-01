import React from 'react';
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        My React App Test
      </Typography>
      <div>
        <Link to="/about/">About Me</Link>
        <Link to="/home/">Home</Link>
      </div>
    </Toolbar>
  </AppBar>
);

export default AppHeader;