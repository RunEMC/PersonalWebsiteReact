import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, withStyles, CardMedia, CardContent, CardActions, Button, CardActionArea } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group'

const styles = theme => ({
  container: {
    zIndex: '-1',
    width: '100%',
    height: '100%'
  },
  clouds: {
    position: 'absolute',
    top: '10%',
    left: '-10%',
    transition: 'left 10s linear'
  }
})

class BackgroundControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      cloud1Pos: -15
    }
  }

  componentDidMount() {
    this.updatePositions(-10, 10);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updatePositions(pos, time) {
    setInterval(
      () => {
        this.setState({
          cloud1Pos: pos
        });
      },
      time * 100
    )
  }

  updateWindowDimensions() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <img style={{left: this.state.cloud1Pos+'%'}} className={classes.clouds} src="http://ronli.comli.com/Icons/cloud.png"/>
      </div>
    );
  }
} 

BackgroundControl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackgroundControl);