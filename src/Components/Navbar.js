import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const containerStyle = {
    height: '50px',
    width: '100%',
    textAlign: 'center',
    position: 'fixed',
    backgroundColor: 'white',
};

const rowStyle = {
  height: 'inherit',
}

const cellStyle = {
  padding: '12px',
}

class CustNavbar extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    // Change sm=.. to md=.. later for responsive
    return (
      <Grid style={containerStyle}>
        <Row style={rowStyle}>
          <Col xs={12} sm={2} style={cellStyle}>
            <a ref="#">About</a>
          </Col>
          <Col xs={12} sm={2} style={cellStyle}>
            <a ref="#">Projects</a>
          </Col>
          <Col xs={12} sm={4} style={cellStyle}>
            <a ref="#">Ron Li</a>
          </Col>
          <Col xs={12} sm={2} style={cellStyle}>
            <a ref="#">Contact</a>
          </Col>
          <Col xs={12} sm={2} style={cellStyle}>
            <a ref="#">Resume</a>
          </Col>
        </Row>
      </Grid>
    )
  };

  /* Demo
    render() {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  */
}

export default CustNavbar;
