import React from 'react';
import lootbox from '../Images/lootbox.png';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: props.imgSrc,
    };
  }

  render() {
    return (
      <div>
        <img src={this.props.imgSrc} alt={"test"}/>
        <h3>Ron Li</h3>
      </div>
    )
  }
}

export default Panel;
