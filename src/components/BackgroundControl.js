import React from 'react';
import PropTypes from 'prop-types';
import { Card, Typography, withStyles, CardMedia, CardContent, CardActions, Button, CardActionArea } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './clouds.css';

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%'
  },
})

class BackgroundControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      cloud1Pos: -15,
      clouds: [],
      availableIds: [],
      maxID: 0,
      top: '20%'
    }
  }

  componentDidMount() {
    this.updatePositions(20, 20000);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updatePositions(pos, time) {
    // Grab a unique id, also dont forget to put it back after use!
    var id;
    if (this.state.availableIds.length <= 0) {
      id = this.state.maxID;
      this.setState({maxID: id + 1});
    } else {
      id = this.state.availableIds[0];
      this.state.availableIds.shift();  // Might not work and require setstate instead
    }

    // Update the new cloud's position
    this.setState({top: pos+'%'});

    // Add new cloud
    this.setState(state => ({
      clouds: [
        ...state.clouds,
        { id: id, top: pos, time: time },
      ],
    }));

    // Wait until animation finishes
    setTimeout(
      () => {
        this.updatePositions(pos, time);
      }, time + 1500
    )
  }

  updateWindowDimensions() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }
  
  render() {
    const { classes } = this.props;
    const { clouds } = this.state;
    var { top } = this.state;

    return (
      <div>
        {/* <img style={{left: this.state.cloud1Pos+'%'}} className={classes.clouds} src="http://ronli.comli.com/Icons/cloud.png"/> */}
        <TransitionGroup>
          {clouds.map(({ id, pos, time }) => {
            return (
            <CSSTransition
              key={id}
              timeout={time}
              classNames="clouds"
            >
              <img className="clouds" style={{top: top}} src="http://ronli.comli.com/Icons/cloud.png"/>
            </CSSTransition>
          )})}
        </TransitionGroup>
      </div>
    );
  }
} 

BackgroundControl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackgroundControl);