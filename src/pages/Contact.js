import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles, Toolbar, Avatar, Fab, Tooltip, TextField, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';

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
  emailField: {
    float: 'right'
  },
  networkingDivider: {
    width: '80%',
    borderTop: '1px solid #636363',
    opacity: '0.3',
    marginBottom: '25px'
  },
  directDivider: {
    marginTop: '25px',
    height: '80%',
    borderLeft: '1px solid #636363',
    opacity: '0.3',
  },
  sendButton: {
    marginTop: '5px',
    // float: 'right'
  },
  send: {
    height: '20px',
    width: '20px',
    margin: '0 0 0 10px'
  }
})

class Contact extends React.Component {
  state = {
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="h4" gutterBottom className={classes.header}>Contact Me</Typography>
        <Toolbar>
          <Grid container spacing={24} direction="row">

            <Grid item xs={5} className={classes.gridItem}>
              <Grid container spacing={24} direction="column">

                <Grid item xs className={classes.gridItem}>
                  <Typography variant="h6" gutterBottom className={classes.header}>Contact Info</Typography>
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

            <Grid item xs={1}>
              <div className={classes.directDivider}></div>
            </Grid>

            <Grid item xs className={classes.gridItem}>
              <form>
                <Typography variant="h6" gutterBottom className={classes.header}>Message Me Directly</Typography>
                <TextField
                  id="Name"
                  label="Enter Your Name"
                  placeholder="John Doe"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="Name"
                  label="Enter Your Email"
                  type="email"
                  autoComplete="email"
                  placeholder="JohnDoe@email.com"
                  margin="normal"
                  variant="outlined"
                  className={classes.emailField}
                />
                <TextField
                  id="Name"
                  label="Enter Your Message"
                  multiline
                  rows="8"
                  placeholder=""
                  onChange={this.handleChange('multiline')}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <Button variant="contained" className={classes.sendButton}>
                  Send
                  <SendIcon className={classes.send}></SendIcon>
                </Button>
              </form>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    );
  }
} 

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);