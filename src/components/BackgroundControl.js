import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

import './clouds.css';
import CloudImg from './img/cloud.png'

// Move this to separate file
const configs = {
  cloudVerticalVariability: 5,
  cloudSizeVariability: 5,
  cloudSpeedVariability: 10000,
  cloudVerticalStart: 25,
  cloudAvgSize: 10,
  cloudAvgSpeed: 40000,   // As miliseconds in time taken to complete animation
  cloudStartDelayMax: 10000,
  cloudStartDelayMin: 1000,
}

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%'
  },
})

class BackgroundControl extends React.Component {
  _isMounted_ = false;

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0,
      clouds: [],
      availableIds: [],
      maxID: 0
    }
  }

  componentDidMount() {
    this._isMounted_ = true;
    // this.updateWindowDimensions();
    // Wait for a bit before sending the first cloud
    // setTimeout(
    //   () => {
    this.createClouds();
    //   },
    //   2000
    // )
    // this.createNewCloudLoop(20, 10, 20000);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    this._isMounted_ = false;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  async createClouds() {
    var top = this.getRandBetween(configs.cloudVerticalStart, 80);
    var size = configs.cloudAvgSize + this.getRandBetween(0, configs.cloudSizeVariability * 2) - configs.cloudSizeVariability;
    var speed = configs.cloudAvgSpeed + this.getRandBetween(0, configs.cloudSpeedVariability * 2) - configs.cloudSpeedVariability;
    var delay = this.getRandBetween(configs.cloudStartDelayMin, configs.cloudStartDelayMax);
    // Create cloud
    this.createNewCloudLoop(top, size, speed, delay);
    // console.log("Top: " + top + " Size: " + size + " Speed: " + speed + " Delay: " + delay);

    // Wait for a bit before creating a cloud
    setTimeout(
      () => {
        this.createClouds();
      },
      delay
    )
  }

  async createNewCloudLoop(pos, size, time, delay) {
    var id = uuid();

    // Add new cloud
    if (this._isMounted_) {
      this.setState(state => ({
        clouds: [
          ...state.clouds,
          { id: id, top: pos+'%', size: size+'%', time: (time/1000)+'s' },
        ],
      }));
    }

    // Wait until animation finishes before deleting
    setTimeout(
      () => {
        if (this._isMounted_) {
          this.setState(state => ({
            clouds: state.clouds.filter(
              cloud => cloud.id !== id
            ),
          }));
        }
      }, time + 2500
    )
  }

  // Returns a random integer between min and max inclusive
  getRandBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var ret = Math.floor((Math.random() * (max - min + 1)) + min);
    // console.log("Min: " + min + " Max: " + max + " Ret: " + ret);
    return ret;
  }

  updateWindowDimensions() {
    // this.setState({
    //   windowHeight: window.innerHeight
    // })
  }
  
  render() {
    const { clouds } = this.state;

    return (
      <div>
        <TransitionGroup>
          {clouds.map(({ id, top, size, time }) => (
            <CSSTransition
              key={id}
              timeout={time}
              classNames="clouds"
              exit={false}
            >
              <img alt="A Smooth Rolling Cloud" style={{top: top, height: size, transitionDuration: time}} src={CloudImg}/>
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