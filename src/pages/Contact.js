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

function Contact(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.header}>Contact Me</Typography>
    </div>
  );
} 

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);