import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Launches from './components/Launches';
import LaunchPage from './components/pages/LaunchPage';
import Footer from './components/layout/Footer';
import axios from 'axios';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField, Divider } from '@material-ui/core';

const styles = () => ({
  grid: {
    padding: "20px 40px 0",
  }
});

class App extends Component {
  state = {
    launches: [],
    start: "2006-03-25",
    end: new Date().toISOString().split("T")[0]
  };

  componentDidMount() {
    this.getLaunches();
  };

  getLaunches = async () => {
    let response = await axios.get("https://api.spacexdata.com/v3/launches?limit=15");
    this.setState({ launches: response.data });
  }

  reverseLaunches = () => {
    let _launches = this.state.launches.reverse();
    // console.log(_launches);
    this.setState({
      launches: _launches
    });
  }

  setStartDate = (e) => {
    this.setState({ start: e.target.value});
  }

  setEndDate = (e) => {
    this.setState({ end: e.target.value});
  }

  getNewLaunches = async () => {
    let response = await axios.get(`https://api.spacexdata.com/v3/launches?start=${this.state.start}&end=${this.state.end}`);
    this.setState({ launches: response.data })
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={props => (
            <div>
              <div style={{padding: "20px 40px 0"}}>
                <form noValidate>
                  <Grid container justify="space-around">
                    <TextField
                      onInput={this.setStartDate}
                      variant="outlined"
                      color="primary"
                      id="start"
                      label="Start Date"
                      type="date"
                      defaultValue="2006-03-25"
                    />
                    <TextField
                      onInput={this.setEndDate}
                      variant="outlined"
                      color="primary"
                      id="end"
                      label="End Date"
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                    />
                    <Button variant="outlined" color="primary" onClick={this.getNewLaunches}>Filter Launches</Button>
                    <Button variant="outlined" color="primary" onClick={this.reverseLaunches}>Reverse Order</Button>
                  </Grid>
                </form>
                <Divider style={{marginTop: "20px"}}/>
                <Grid container justify="space-around">
                  
                </Grid>
              </div>
              <Grid container alignItems="stretch" spacing={3} className={classes.grid} justify="center">
                <Launches launches={this.state.launches} />
              </Grid>
            </div>
          )} />
          <Route path="/:flight_number" component={LaunchPage} />
        </Switch>
        <Footer />
      </Router>
    );
  };
}

export default withStyles(styles, { withTheme: true })(App) ;
