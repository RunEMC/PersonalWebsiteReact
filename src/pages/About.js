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
    height: '100px',
    width: '100px'
  }
})

function About(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h3" gutterBottom className={classes.header}>About Me</Typography>
      <div className={classes.contentContainer}>
        <Grid container spacing={24}>
          <Grid item xs={3} className={classes.gridItem}>
            <img className={classes.image} src="http://ronli.comli.com/Head_Circle.png"/>
          </Grid>
          <Grid item xs>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    </div>
  );
} 

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);