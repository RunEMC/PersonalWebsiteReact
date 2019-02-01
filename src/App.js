import React, { Fragment } from 'react';
import { CssBaseline, withStyles, } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});

const App = ({ classes }) => (
  <Router>
    <div>
      <Fragment>
        <CssBaseline />
        <Header />
        <main className={classes.main}>
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/home/" component={Home} />
        </main>
      </Fragment>
    </div>
  </Router>
);

export default withStyles(styles)(App);