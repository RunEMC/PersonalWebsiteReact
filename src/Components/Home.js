import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Panel from './Panel';

const Home = () => (
  <div>
    <h1>Hello world from home</h1>
    <nav>
      <Panel title="Ron Li" />
      <Link to="/about">
        <Panel title="About" />
      </Link>
      <Link to="/about">
        <Panel title="Projects" />
      </Link>
      <Link to="/about">
        <Panel title="Contact" />
      </Link>
      <Link to="/about">
        <Panel title="Resume" />
      </Link>
    </nav>

    <Grid>
      <Row>
        <Col xs={12} md={8}>
          test1
        </Col>
        <Col xs={6} md={4}>
          test2
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Home;
