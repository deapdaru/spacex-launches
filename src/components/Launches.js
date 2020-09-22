import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, CardHeader, Grid } from '@material-ui/core';
import DashBoard from './DashBoard';

const styles = () => ({
  card: {
    backgroundColor: "#ddd",
  },
  grid: {
    padding: "20px 40px 0",
  }
});

class Launches extends Component {
    state = {
        launches: [],
        start: "2006-03-24",
        end: new Date().toISOString().split("T")[0],
        open: false
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
        this.setState({ open: !this.state.open});
        let response = 
            await axios.get(`https://api.spacexdata.com/v3/launches?start=${this.state.start}&end=${this.state.end}`);
        this.setState({ launches: response.data });
        this.setState({ open: !this.state.open});
    }

    render() {
        const { classes } = this.props;
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return (
            <div>
                <DashBoard
                    start={this.state.start}
                    end={this.state.end}
                    setStartDate={this.setStartDate} 
                    setEndDate={this.setEndDate} 
                    reverseLaunches={this.reverseLaunches} 
                    getNewLaunches={this.getNewLaunches} 
                    open={this.state.open} 
                />
                <Grid container alignItems="stretch" spacing={3} className={classes.grid} justify="center">
                    {this.state.launches.map((launch) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={launch.flight_number}>
                            <Link style={linkStyle} to={"/" + launch.flight_number}>
                                <Card variant="outlined" className={classes.card}>
                                    <CardActionArea>
                                        <CardHeader 
                                            title={launch.mission_name} 
                                            subheader={new Date(launch.launch_date_unix*1000).toLocaleDateString("en-GB", options)}
                                        />
                                        <CardMedia 
                                            style={mediaImg} 
                                            component="img" 
                                            alt={launch.mission_name} 
                                            src={launch.links.mission_patch} 
                                            title={launch.mission_name} 
                                        /> 
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

const mediaImg = {
    maxWidth: "90%",
    margin: "0 auto",
    padding: "10px 0 20px"
}

const linkStyle = {
    textDecoration: "none"
}

export default withStyles(styles, { withTheme: true })(Launches);
