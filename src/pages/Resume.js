import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles, Paper } from '@material-ui/core';
import { Document, Page } from 'react-pdf';

import ResumePDF from './resume.pdf'

const styles = theme => ({
  header: {
    padding: '30px 10px 20px 10px'
  },
  documentContainer: {
    paddingTop: '25px',
    paddingLeft: '73.844px'
  }
})

function Resume(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.header}>Resume</Typography>
      <Paper container>
        <div className={classes.documentContainer}>
          <Document file={ResumePDF}>
            <Page pageNumber={1} scale={1.5}/>
          </Document>
        </div>
      </Paper>
    </div>
  );
} 

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);