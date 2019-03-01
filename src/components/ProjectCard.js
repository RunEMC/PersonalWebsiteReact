import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, withStyles, CardMedia, CardContent, CardActions, Button, CardActionArea } from '@material-ui/core';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  cardAction: {
    width: '218px'
  },
  media: {
    objectFit: 'cover',
    height: '218px',
    width: '218px'
  },
  button: {
    backgroundColor: '#DFDFDF',
    color: '#636363'
  },
  // details: {
  //   backgroundColor: '#f8f8f8'
  // }
})

function ProjectCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
        <CardActionArea className={classes.cardAction}>
            <CardMedia 
                className={classes.media}
                image={props.imgSrc}
                title={props.title}
            />
        </CardActionArea>

        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography variant="h6">{props.title}</Typography>
                <Typography variant="body1">{props.description}</Typography>
                <CardActions>
                    <Button variant="contained" size="small" className={classes.button}>
                        Check it out
                    </Button>
                </CardActions>
            </CardContent>
        </div>
    </Card>
  );
} 

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);