import React from 'react';
//import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Panel from './Panel'

const homeStyle = {
  paddingTop: '100px',
  textAlign: 'center',
}

const rowStyle = {
  marginTop: '15%',
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid style={homeStyle}>
        <Row style={rowStyle}>
        <Col sm={3}></Col>
          <Col sm={6}>
            <Panel title="About" imgSrc="./Images/lootbox.png" position='topLeft'/>
            <Panel title="Projects" imgSrc="./Images/lootbox.png" position='topRight'/>
          </Col>
          <Col sm={3}></Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Panel title="Contact" imgSrc="./Images/lootbox.png" position='botLeft'/>
            <Panel title="Resume" imgSrc="./Images/lootbox.png" position='botRight'/>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Grid>
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
