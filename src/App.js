import React, { Fragment } from 'react';
import { CssBaseline, withStyles, } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import BackgroundAnimations from './components/BackgroundControl'

const styles = theme => ({
  mainContainer: {
    backgroundColor: '#85C7F2',
    minHeight: '100vh',
    height: '100%'
  },
  outerContainer: {
    padding: '40px 12% 40px 12%',
  },
  main: {
    position: 'relative',
    backgroundColor: '#F1F1F1',
    height: '100%',
    padding: '2% 10% 6% 10%',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
  }
});

const App = ({ classes }) => (
  <Router>
    <div className={classes.mainContainer}>
      <Fragment>
        <CssBaseline />
        <Header />
        <div className={classes.outerContainer}>
          <BackgroundAnimations />
          <main className={classes.main}>
            <Route exact path="/" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/home/" component={Home} />
            <Route path="/projects/" component={Projects} />
            <Route path="/contact/" component={Contact} />
            <Route path="/resume/" component={Resume} />
          </main>
        </div>
      </Fragment>
    </div>
  </Router>
);

export default withStyles(styles)(App);