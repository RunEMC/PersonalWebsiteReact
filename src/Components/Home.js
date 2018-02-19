import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Panel from './Panel';
import lootbox from '../Images/lootbox.png';

const Home = () => (
  <div>
    <Panel title="Ron Li" imgsrc=""/>
    <Grid>
      <Row>
        <Col md={6}>
          <Link to="/about">
            <div>
              <img
                name={"panel-bg"}
                src={lootbox}
                alt={"test"}
              />
              <h3>About</h3>
            </div>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/about">
            <Panel title="Projects" imgsrc=""/>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Link to="/about">
            <Panel title="Contact" imgsrc=""/>
          </Link>
        </Col>
        <Col md={6}>
          <Link to="/about">
            <Panel title="Resume" imgsrc=""/>
          </Link>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Home;
