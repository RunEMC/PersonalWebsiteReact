import React from 'react';
import {
  Typography,
} from '@material-ui/core';


class Home extends React.Component {
  _isMounted__ = false;

  state = {
    dots: ".",
    timeout: 2000
  }

  componentDidMount() {
    this._isMounted__ = true;
    this.addDots();
  }

  componentWillUnmount() {
    this._isMounted__ = false;
  }

  addDots() {
    setTimeout(
      () => {
        if (this._isMounted__) {
          this.setState({
            dots: this.state.dots + ".",
            timeout: this.state.timeout <= 1000 ? 1000 : this.state.timeout - 10
          });
          this.addDots();
        }
      }, this.state.timeout
    )
  }

  render() {
    return (
      <div style={{marginTop:'4%'}}>
        <Typography variant="headline">Welcome to my website, feel free to take a look around or just watch the clouds go by{this.state.dots}</Typography>
      </div>
    )
  }
}

export default (Home);