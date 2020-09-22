import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Launches from './components/Launches';
import LaunchPage from './components/pages/LaunchPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Launches} />
          <Route exact path="/:flight_number" component={LaunchPage} />
        </Switch>
        <Footer />
      </Router>
    );
  };
}

export default App;
