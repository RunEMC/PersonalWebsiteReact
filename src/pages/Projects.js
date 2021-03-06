import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import ProjectCard from '../components/ProjectCard';
import SearchAndProtectLogo from './img/searchandprotect.png';
import BridgeEDLogo from './img/bridgeed.png';
import HTNSimLogo from './img/htnsim.png';
import ActivityMapLogo from './img/activitymap.png';
import GiphyGuesserLogo from './img/giphyguesser.png';
import RobotLogo from './img/robot.png';
import PersonalWebsiteLogo from './img/web.png';
import DiscordLogo from './img/discord.png';

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

// TODO:
// Move these to jsons or a database

const projDescr = "Here you can find some of the projects I've worked on in the past as well as most of my projects from hackathons. " +
"Many of them are also available on Github and you can take a look on there or fork a copy to try as well. " +
"If you have any suggestions or comments for any of my projects, feel free to contribute with a pull request on Github or send me a PM."

// Search and protect
const searchAndProtectDesc = "A Twitter bot that searches through public timelines of people and discover those that are at risk of self harm or depression using personality profiling and sentiment analysis.";
const searchAndProtectTools = ["React", "STDLib", "Node JS", "IBM Watson", "CSS", "HTML", "Javascript"];

// BridgeED
const bridgeEDDesc = "A fast, practical, and educational translations app that allow immigrants and foreign visitors to easily understand the environment around them with a few simple taps on their phone.";
const bridgeEDTools = ["React Native", "Node JS", "Unity", "IBM Watson", "Expo IO"];

// Hack the north simulator
const htnSimDesc = "A fun 2D RPG where the player acts a hackathon participant at Hack the North 2018 and can participate in activities such as working on their hackathon project, sleeping, eating, and talking to sponsors for cool swag.";
const htnSimTools = ["C++", "Ubisoft Nest API", "SFML"];

// Activity Map
const actMapDesc = "Using data coming from an Arduino equipped with a light, temperature, and noise sensor, we created a tool that allows participants at Hackathons to oversee all available hacking rooms and find ones that would suit their personal hacking needs";
const actMapTools = ["C", "C++", "React", "Arduino"];

// Giphy guesser
const giphyGuesserDesc = "Giphy Guesser is a simple phone game using Giphy which involves having a player select a gif relevant to a word or phrase and having other players guess the chosen word or phrase after viewing the given gif image.";
const giphyGuesserTools = ["React Native", "Expo IO", "Giphy API"];

// Pybot
const pybotDesc = "A python discord bot that implements additional voice and chat commands to facilitate better social exchanges between participants.";
const pybotTools = ["Python", "Discord API"];

// Old website
const oldSiteDesc = "My old personal website used mainly to expand my web dev skills and experiment with SQL/PHP database management.";
const oldSiteTools = ["HTML", "CSS", "Javascript", "PHP", "MySQL", "Bootstrap"];

// Noot bot
const discordBotDesc = "My first attempt at making a discord bot, it has audio playback and a text-based RPG game along with a whole bunch of other random features.";
const discordBotTools = ["Node JS", "FFmpeg", "Discord API"];

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
            <ProjectCard imgSrc={SearchAndProtectLogo} title="Search And Protect" date="February 8, 2018" location="QHacks 2018" description={searchAndProtectDesc} tools={searchAndProtectTools} url="https://github.com/RunEMC/SearchAndPro.tech"/>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={BridgeEDLogo} title="BridgeED" date="November 19, 2017" location="Hack Western 4" description={bridgeEDDesc} tools={bridgeEDTools} url="https://github.com/christinazhang/bridgED" />
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={HTNSimLogo} title="Hack The North Simulator" date="September 16, 2018" location="Hack The North 2018" description={htnSimDesc} tools={htnSimTools} url="https://github.com/hygzhu/hack-the-north-2018"/>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={ActivityMapLogo} title="Activity Map" date="November 25, 2018" location="Hack Western 5" description={actMapDesc} tools={actMapTools} url="https://github.com/hygzhu/hackwestern-2018"/>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={GiphyGuesserLogo} title="Giphy Guesser" date="September 10, 2017" location="PennApps XVI" description={giphyGuesserDesc} tools={giphyGuesserTools} url="https://github.com/nicholaspun/giphyguesser"/>
          </Grid>
          
          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={RobotLogo} title="Pybot" date="April 13, 2017" location="Personal Project" description={pybotDesc} tools={pybotTools} url="https://github.com/RunEMC/PyBot"/>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={PersonalWebsiteLogo} title="Old Personal Website" date="April 15, 2017" location="Personal Project" description={oldSiteDesc} tools={oldSiteTools} url="http://ronli.comli.com"/>
          </Grid>

          <Grid item xs className={classes.gridItem}>
            <ProjectCard imgSrc={DiscordLogo} title="Discord Bot" date="April 26, 2018" location="Personal Project" description={discordBotDesc} tools={discordBotTools} url="https://github.com/RunEMC/NootBot"/>
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