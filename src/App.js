import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Launches from './components/Launches';
import LaunchPage from './components/pages/LaunchPage';
import Footer from './components/layout/Footer';
import axios from 'axios';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const styles = theme => ({
  grid: {
    padding: "40px",
  }
});

class App extends Component {
  state = {
    launches: []
  };

  componentDidMount() {
    this.getLaunches();
  };

  getLaunches = async () => {
    let response = await axios.get("https://api.spacexdata.com/v3/launches?limit=10");
    // console.log(response.data);
    this.setState({ launches: response.data })
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={props => (
            <Grid container spacing={3} className={classes.grid} justify="center">
              <Launches launches={this.state.launches} />
            </Grid>
          )} />
          <Route path="/:flight_number" component={LaunchPage} />
        </Switch>
        <Footer />
      </Router>
    );
  };
}

export default withStyles(styles, { withTheme: true })(App) ;
