import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, withStyles, CardMedia, CardContent, CardActions, Button, CardActionArea } from '@material-ui/core';

const styles = theme => ({
  card: {
    display: 'flex'
  },
  media: {
    objectFit: 'cover',
    height: '218px'
  }
})

function ProjectCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
                className={classes.media}
                image={props.imgSrc}
                title={props.title}
            />
        </CardActionArea>

        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography variant="h6">Project Title</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                <CardActions>
                    <Button size="small" color="primary">
                        Demo
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