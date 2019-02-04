import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import ProjectCard from '../components/ProjectCard';

const styles = theme => ({
  header: {
    padding: '30px 10px 0px 10px'
  },
  contentContainer: {
    display: 'inline-block'
  },
  gridItem: {
    marginTop: '15px'
  },
  image: {
    margin: 'auto',
    height: '150px',
    width: '150px'
  },
  text: {
    fontSize: '18px',
    padding: '12px'
  }
})

function Projects(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.header}>Projects</Typography>
      <div className={classes.contentContainer}>
        <Grid container spacing={24} direction="column">
        
          <Grid item xs className={classes.gridItem}>
            <Typography variant="body1" className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc="https://avatars2.githubusercontent.com/u/14964098?s=460&v=4" />
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc="https://avatars2.githubusercontent.com/u/14964098?s=460&v=4" />
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc="https://avatars2.githubusercontent.com/u/14964098?s=460&v=4" />
          </Grid>

        </Grid>
      </div>
    </div>
  );
} 

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);