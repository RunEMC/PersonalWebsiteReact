import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import ProjectCard from '../components/ProjectCard';
import SearchAndProtectLogo from './img/searchandprotect.png'

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
    padding: '12px',
    lineHeight: '175%'
  }
})

const projDescr = "Here you can find some of the projects I've worked on in the past as well as most of my projects from hackathons. " +
"Many of them are also available on Github and you can take a look on there or fork a copy to try as well. " +
"If you have any suggestions or comments for any of my projects, feel free to contribute with a pull request on Github or send me a PM."

// Search and protect
const searchAndProtectDesc = "A Twitter bot that searches through public timelines of people and discover those that are at risk of self harm or depression using personality profiling and sentiment analysis."

function Projects(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.header}>Projects</Typography>
      <div className={classes.contentContainer}>
        <Grid container spacing={24} direction="column">
        
          <Grid item xs className={classes.gridItem}>
            <Typography variant="body1" className={classes.text}>
              {projDescr}
            </Typography>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={SearchAndProtectLogo} title="Search And Protect" description={searchAndProtectDesc} />
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