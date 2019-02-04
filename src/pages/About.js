import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';


const styles = theme => ({
  header: {
    padding: '30px 10px 20px 10px'
  },
  contentContainer: {
    display: 'inline-block'
  },
  gridItem: {
    textAlign: 'center'
  },
  image: {
    margin: 'auto',
    height: '150px',
    width: '150px'
  },
  text: {
    fontSize: '18px',
    paddingTop: '12px'
  }
})

function About(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.header}>About Me</Typography>
      <div className={classes.contentContainer}>
        <Grid container spacing={24} direction="column">
          <Grid item xs>
            <Grid container spacing={24}>
              <Grid item xs={3} className={classes.gridItem}>
                <img alt="face" className={classes.image} src="http://ronli.comli.com/Head_Circle.png"/>
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid item xs>
            <Grid container spacing={24}>
              <Grid item xs>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </Grid>
              <Grid item xs={3} className={classes.gridItem}>
                <img alt="face2" className={classes.image} src="http://ronli.comli.com/Head_Circle.png"/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Typography className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
} 

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);