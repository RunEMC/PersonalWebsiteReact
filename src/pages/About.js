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
                  My name is Ron Li, I am a fourth year Double Degree student studying Computer Science at the University of Waterloo and Business Administration at Wilfrid Laurier University. I am currently on a co-op work term as a software developer at JSI Telecom while in the past I've worked at Manulife and Polaris Transportation Group. As a software developer, I am experienced in the following: 
                  {/* Format this into a table with Language/Framework/Tools at the top and familiarity as the row headers */}
                  C, C++, C#, Python, React, Angular, Node JS, Git, Bash, VIM, Visual Studio, Latex...
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs>
            <Typography className={classes.text}>
              On my free time I enjoy watching movies/TV shows, playing video games and my guitar. I also own a sizable collection of tabletop games that is ever expanding including classics such as Pandemic, Catan and Avalon. Occasionally, I would attend hackations if possible in order to keep my development skills up to date and to try and complete a project that is on my backlog of ideas.
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