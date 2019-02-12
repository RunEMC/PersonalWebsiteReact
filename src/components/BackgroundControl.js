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
      maxID: 0
    }
  }

  componentDidMount() {
    this.updatePositions(10, 10);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updatePositions(pos, time) {
    // setInterval(
    //   () => {
        // Grab a unique id, also dont forget to put it back after use!
        var id;
        if (this.state.availableIds.length <= 0) {
          id = this.state.maxID;
          this.setState({maxID: id + 1});
        } else {
          id = this.state.availableIds[0];
          this.state.availableIds.shift();  // Might not work and require setstate instead
        }
        // Add new cloud
        this.setState(state => ({
          clouds: [
            ...state.clouds,
            { id: id, top: pos },
          ],
        }));
    //   },
    //   time * 1000
    // )
  }

  updateWindowDimensions() {
    this.setState({
      windowHeight: window.innerHeight
    })
  }
  
  render() {
    const { classes } = this.props;
    const { clouds } = this.state;

    return (
      <div>
        {/* <img style={{left: this.state.cloud1Pos+'%'}} className={classes.clouds} src="http://ronli.comli.com/Icons/cloud.png"/> */}
        <TransitionGroup>
          {clouds.map(({ id, top }) => (
            <CSSTransition
              key={id}
              timeout={10000}
              classNames="clouds"
            >
              <img className="clouds" style={{top: {top}+'%'}} src="http://ronli.comli.com/Icons/cloud.png"/>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
} 

BackgroundControl.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BackgroundControl);