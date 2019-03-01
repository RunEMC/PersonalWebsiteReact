import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import Face from './Head_Circle.png';

const styles = theme => ({
  header: {
    padding: '30px 10px 20px 10px'
  },
  contentContainer: {
    display: 'inline-block'
  },
  gridItem: {
    textAlign: 'center',
    margin: 'auto'
  },
  image: {
    margin: 'auto',
    height: '150px',
    width: '150px'
  },
  text: {
    fontSize: '18px',
    paddingTop: '12px',
    lineHeight: '175%'
  }
})

const professionalDesc = "My name is Ron Li, I am a fourth year Double Degree student studying " +
"Computer Science at the University of Waterloo and Business Administration at Wilfrid Laurier University. " +
"I am currently on a co-op work term as a software developer at JSI Telecom, while in the past I've worked at " +
"Manulife and Polaris Transportation Group. As a software developer, I am most experienced in the following: " +
"C, C++, C#, Python, React/Angular/Node, Java/Android. You can find out more by taking a look at my resume or reaching out to me.";

const hobbyDesc = "On my free time I enjoy watching movies/TV shows, playing video games and practicing my guitar. " +
"I also own a sizable collection of tabletop games that is ever expanding (though I sometimes wish that's not the case). " +
"Occasionally, I would attend hackations in order to sharpen my development skills, build something cool and learn something new.";

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
                <img alt="face" className={classes.image} src={Face}/>
              </Grid>
              <Grid item xs>
                <Typography variant="body1" className={classes.text}>
                  {professionalDesc}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs>
            <Typography className={classes.text}>
              {hobbyDesc}
            </Typography>
          </Grid>

          {/* Make a table for boardgames, movies and tv list */}

        </Grid>
      </div>
    </div>
  );
} 

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);