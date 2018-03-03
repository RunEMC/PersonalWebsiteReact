import React from 'react';
//import { Switch, Route } from 'react-router-dom';
import CustNavbar from './Navbar';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <CustNavbar />
        <Home />
      </div>
    )
  }
}

/*
const App = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </Switch>
);
*/

export default App;
