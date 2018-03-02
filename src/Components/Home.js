import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Panel from './Panel'
import lootbox from '../Images/lootbox.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel imgSrc="./Images/lootbox.png"/>
    )
  }
}

/*
const Home = () => (
  <div>
    <div>
      <img src={lootbox} alt={"test"}/>
      <h3>Ron Li</h3>
    </div>
    <Grid>
      <Row>
        <Col md={6}>
          <Link to="/about">
            <div>
              <img src={lootbox} alt={"test"}/>
              <h3>About</h3>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/about">
            <div>
              <img src={lootbox} alt={"test"}/>
              <h3>About</h3>
            </div>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Link to="/about">
            <div>
              <img src={lootbox} alt={"test"}/>
              <h3>About</h3>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/about">
            <div>
              <img src={lootbox} alt={"test"}/>
              <h3>About</h3>
            </div>
          </Link>
        </Col>
      </Row>
    </Grid>
  </div>
);
*/

export default Home;
