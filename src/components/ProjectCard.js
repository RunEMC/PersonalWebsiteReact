import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, withStyles, CardMedia, CardContent, CardActionArea, Chip } from '@material-ui/core';

// import OpenIcon from '@material-ui/icons/OpenInNew';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  cardAction: {
    width: '218px',
    backgroundColor: '#f8f8f8'
  },
  details: {
    position: 'relative',
    padding: '0px 30px',
    borderLeft: '1px solid #d1d1d1'
  },
  media: {
    objectFit: 'cover',
    height: '218px',
    width: '218px'
  },
  cardBody: {
    lineHeight: '160%'
  },
  cardDate: {
    fontStyle: 'italic',
    paddingBottom: '3px'
  },
  button: {
    backgroundColor: '#DFDFDF',
    color: '#636363'
  },
  buttonIcon: {
    paddingLeft: '5px'
  },
  cardActionArea: {
    paddingTop: '15px',
    paddingLeft: '0px'
  },
  chip: {
    margin: '3px 5px',
    fontSize: '12px'
  },
  chipsContainer: {
    position: 'absolute',
    bottom: '10px',
    marginLeft: '-5px'
  }
})

const separator = " - ";

function openDemo(url) {
  var newWindow = window.open(url);
  newWindow.location = url;
}

// Requires as props: imgSrc, title, date, location, description, tools, url
function ProjectCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
        <CardActionArea className={classes.cardAction}>
            <CardMedia 
                className={classes.media}
                image={props.imgSrc}
                title={props.title}
                onClick={() => {openDemo(props.url)}}
            />
        </CardActionArea>

        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="subtitle1" className={classes.cardDate}>{props.location}{separator}{props.date}</Typography>
                <Typography variant="body1" className={classes.cardBody}>{props.description}</Typography>
                {/* <CardActions className={classes.cardActionArea}>
                    <Button variant="contained" size="small" className={classes.button}>
                        Check it out
                        <OpenIcon className={classes.buttonIcon}/>
                    </Button>
                </CardActions> */}
                <div className={classes.chipsContainer}>
                  {props.tools.map(tool => (
                    <Chip
                      key={tool}
                      label={tool}
                      onClick={() => {}}
                      className={classes.chip}
                    />
                  ))}
                </div>
            </CardContent>
        </div>
    </Card>
  );
} 

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);