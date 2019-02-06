import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles, Toolbar, Avatar, Fab, Tooltip } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

import icon from '../components/icons/about.svg'

const styles = theme => ({
  header: {
    padding: '30px 10px 20px 10px'
  },
  avatar: {
    margin: '10px',
    backgroundColor: '#636363'
  },
  fab: {
    margin: '25px'
  },
  avatarLinks: {
    height: '100%',
    width: '100%'
  },
  networkingDivider: {
    width: '80%',
    borderTop: '1px solid #636363',
    opacity: '0.3',
    marginBottom: '25px'
  }
})

function Contact(props) {
  const { classes } = props;

  return (
    <div>
      <Typography variant="h4" gutterBottom className={classes.header}>Contact Me</Typography>
      <Toolbar>
        <Grid container spacing={24} direction="row">

          <Grid item xs className={classes.gridItem}>
            <Grid container spacing={24} direction="column">

              <Grid item xs className={classes.gridItem}>
                <Grid container alignItems="center">
                  <Avatar className={classes.avatar}><MailIcon/></Avatar>
                  <Typography variant="subtitle1">ronli@comli.com</Typography>
                </Grid>
              </Grid>
              
              <Grid item xs className={classes.gridItem}>
                <Grid container alignItems="center">
                  <Avatar className={classes.avatar}><PhoneIcon/></Avatar>
                  <Typography variant="subtitle1">(123)-456-7890</Typography>
                </Grid>
              </Grid>

              <Grid item xs>
                <div className={classes.networkingDivider}></div>
                <Typography variant="h6">Networking Platforms</Typography>
                <Grid container alignItems="center">
                  <Tooltip title="Github" aria-label="Github">
                    <Fab className={classes.fab}>
                      <img className={classes.avatarLinks} alt="Github" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
                    </Fab>
                  </Tooltip>
                  <Tooltip title="LinkedIn" aria-label="LinkedIn">
                    <Fab className={classes.fab}>
                      <img className={classes.avatarLinks} alt="LinkedIn" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
                    </Fab>
                  </Tooltip>
                  <Tooltip title="Devpost" aria-label="Devpost">
                    <Fab className={classes.fab}>
                      <img className={classes.avatarLinks} alt="Devpost" src="https://image.flaticon.com/icons/svg/25/25231.svg"/>
                    </Fab>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Toolbar>
    </div>
  );
} 

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);