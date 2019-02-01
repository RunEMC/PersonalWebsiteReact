import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, ButtonBase, Typography, Fab, withStyles } from '@material-ui/core';
import logo from './icons/about.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 150,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  navCard: {
    margin: 'auto'
  },
  image: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    height: 125,
    width: 100,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 125,
    },
    '&:hover': {
      zIndex: 1
    },
    borderRadius: '25px',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
  },
  imageSrc: {
    height: 75,
  }
})

function AppHeader(props) {
  const { classes } = props;

  return (
    <AppBar position="static" color='default'>
        <div className={classes.root}>
          <div className={classes.navCard}>
          <Link to="/about/">
            <ButtonBase focusRipple className={classes.image}>
              <img src={logo} alt="Logo" className={classes.imageSrc}/>
              <Typography>About</Typography>
            </ButtonBase>
          </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/home/">
              <ButtonBase focusRipple className={classes.image}>
                <img src={logo} alt="Logo" className={classes.imageSrc}/>
                <Typography>Home</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/home/">
              <ButtonBase focusRipple className={classes.image}>
                <img src={logo} alt="Logo" className={classes.imageSrc}/>
                <Typography>Home</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/home/">
              <ButtonBase focusRipple className={classes.image}>
                <img src={logo} alt="Logo" className={classes.imageSrc}/>
                <Typography>Home</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/home/">
              <ButtonBase focusRipple className={classes.image}>
                <img src={logo} alt="Logo" className={classes.imageSrc}/>
                <Typography>Home</Typography>
              </ButtonBase>
            </Link>
          </div>
        </div>
    </AppBar>
  );
} 

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);