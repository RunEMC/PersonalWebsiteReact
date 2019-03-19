import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles, Toolbar, Avatar, Fab, Tooltip, TextField, Button } from '@material-ui/core';

import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import SendIcon from '@material-ui/icons/Send';

import GithubIcon from './img/github.svg';
import LinkedinIcon from './img/linkedin.png';
import DevpostIcon from './img/devpost.png';

const styles = theme => ({
  header: {
    padding: '30px 10px 10px 10px'
  },
  dirMsgHeader: {
    paddingLeft: '0'
  },
  avatar: {
    margin: '10px',
    backgroundColor: '#636363'
  },
  fab: {
    margin: '20px 15px'
  },
  avatarLinks: {
    height: '100%',
    width: '100%'
  },
  nameField: {
    // marginRight: '30px'
  },
  emailField: {
    [theme.breakpoints.up('1500')]: {
      float: 'right'
    }
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

const notImplementedText = "Sorry, I haven't gotten around to implementing this yet ¯\\_(ツ)_/¯";
const NotImplementedMsg = () => {
  return <Typography style={{padding: '5px 0px', color: 'red'}}>{notImplementedText}</Typography>
}

function openLink(url) {
  var newWindow = window.open(url);
  newWindow.location = url;
}

class Contact extends React.Component {
  state = {
    hideMsg: true
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
                  <Typography variant="h6" gutterBottom>Contact Info</Typography>
                  <Grid container alignItems="center">
                    <Grid container alignItems="center">
                      <Avatar className={classes.avatar}><MailIcon/></Avatar>
                      <Typography variant="subtitle1">rl5li@edu.uwaterloo.com</Typography>
                    </Grid>
                    <Grid container alignItems="center">
                      <Avatar className={classes.avatar}><PhoneIcon/></Avatar>
                      <Typography variant="subtitle1">(519)-591-0551</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs>
                  <div className={classes.networkingDivider}></div>
                  <Typography variant="h6">Networking Platforms</Typography>
                  <Grid container alignItems="center">
                    <Tooltip title="Github" aria-label="Github">
                      <Fab className={classes.fab} onClick={() => {openLink("https://github.com/RunEMC")}}>
                        <img className={classes.avatarLinks} alt="Github" src={GithubIcon}/>
                      </Fab>
                    </Tooltip>
                    <Tooltip title="LinkedIn" aria-label="LinkedIn">
                      <Fab className={classes.fab} onClick={() => {openLink("https://www.linkedin.com/in/ronli1/")}}>
                        <img className={classes.avatarLinks} alt="LinkedIn" src={LinkedinIcon}/>
                      </Fab>
                    </Tooltip>
                    <Tooltip title="Devpost" aria-label="Devpost">
                      <Fab className={classes.fab} onClick={() => {openLink("https://devpost.com/RunEMC")}}>
                        <img className={classes.avatarLinks} alt="Devpost" src={DevpostIcon}/>
                      </Fab>
                    </Tooltip>
                    <Tooltip title="Facebook" aria-label="Facebook">
                      <Fab className={classes.fab} onClick={() => {openLink("https://devpost.com/RunEMC")}}>
                        <img className={classes.avatarLinks} alt="Devpost" src={DevpostIcon}/>
                      </Fab>
                    </Tooltip>
                    <Tooltip title="Steam" aria-label="Steam">
                      <Fab className={classes.fab} onClick={() => {openLink("https://devpost.com/RunEMC")}}>
                        <img className={classes.avatarLinks} alt="Devpost" src={DevpostIcon}/>
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
              <Typography variant="h6" gutterBottom className={classes.dirMsgHeader}>Message Me Directly</Typography>
              <form autoComplete="off" noValidate>
                <TextField
                  id="Name"
                  label="Enter Your Name"
                  placeholder="John Doe"
                  margin="normal"
                  variant="outlined"
                  className={classes.nameField}
                />
                <TextField
                  id="Name"
                  label="Enter Your Email"
                  type="email"
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
                {!this.state.hideMsg && <NotImplementedMsg/>}
                <Button variant="contained" className={classes.sendButton} onClick={() => {this.setState({hideMsg: false})}}>
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