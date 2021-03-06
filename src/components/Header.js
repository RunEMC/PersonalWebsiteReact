import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, ButtonBase, Typography, withStyles } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import HomeIcon from '@material-ui/icons/Home';

import home from './icons/home.svg';
import about from './icons/about.svg';
import projects from './icons/projects.svg';
import contact from './icons/contact.svg';
import resume from './icons/resume.svg';

// https://coolors.co/f5f5f5-266dd3-85c7f2-636363-4c4c4c

const styles = theme => ({
  appBar: {
    backgroundColor: '#266DD3'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: 200,
    paddingLeft: '18%',
    paddingRight: '18%'
  },
  navCard: {
    margin: 'auto'
  },
  image: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    height: 125,
    width: 125,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 125,
    },
    '&:hover': {
      zIndex: 1,
      height: 145,
      width: 145
    },
    borderRadius: '25px',
    backgroundColor: '#F5F5F5',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    '-webkit-transition': 'width 0.2s, height 0.2s', /* Safari */
    transition: 'width 0.2s, height 0.2s'
  },
  imageSrc: {
    height: 80,
    marginLeft: '10px',
    marginRight: '10px'
  },
  text: {
    textDecoration: 'none',
    color: '#4C4C4C'
  }
})

function AppHeader(props) {
  const { classes } = props;

  return (
    <AppBar position="static" color='primary' classes={{colorPrimary: classes.appBar}}>
        <div className={classes.root}>
          <div className={classes.navCard}>
            <Link to="/home/" className={classes.text}>
              <ButtonBase focusRipple className={classes.image}>
                <img src={home} alt="Home" className={classes.imageSrc}/>
                {/* <HomeIcon className={classes.imageSrc}/> */}
                <Typography variant="h6">Home</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/about/" className={classes.text}>
              <ButtonBase focusRipple className={classes.image}>
                <img src={about} alt="About" className={classes.imageSrc}/>
                <Typography variant="h6">About</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/projects/" className={classes.text}>
              <ButtonBase focusRipple className={classes.image}>
                <img src={projects} alt="Projects" className={classes.imageSrc}/>
                <Typography variant="h6">Projects</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/contact/" className={classes.text}>
              <ButtonBase focusRipple className={classes.image}>
                <img src={contact} alt="Contact" className={classes.imageSrc}/>
                <Typography variant="h6">Contact</Typography>
              </ButtonBase>
            </Link>
          </div>
          <div className={classes.navCard}>
            <Link to="/resume/" className={classes.text}>
              <ButtonBase focusRipple className={classes.image}>
                <img src={resume} alt="Resume" className={classes.imageSrc}/>
                <Typography variant="h6">Resume</Typography>
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