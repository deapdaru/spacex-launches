import React, { Component } from 'react';
import axios from 'axios';
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LaunchDetails from './LaunchDetails';
import Error from '../layout/Error';

class LaunchPage extends Component {
    state = {
        launch: [],
        display: false
    }

    componentDidMount() {
        this.getLaunch();
    }

    getLaunch = async () => {
        try {
            let response = await axios.get(`https://api.spacexdata.com/v3/launches/${this.props.match.params.flight_number}`);
            this.setState({ launch: response.data, display: true })
        } catch (err) {
            this.setState({ display: true });
            console.log(err);
        }
        
    }

    render() {
        return (this.state.display ? (this.state.launch.length !== 0 ? (
                <div>
                    <Breadcrumbs style={breadcrumbStyle} aria-label="breadcrumb">
                        <Link color="inherit" href="/">
                            <HomeIcon />
                        </Link>
                        <Typography color="textPrimary">{this.state.launch.mission_name}</Typography>
                    </Breadcrumbs>
                    <LaunchDetails launch={this.state.launch}/>
                </div>
            ) : (<Error />)) : (
                <div></div>
            )
        )
    }
}

const breadcrumbStyle = {
    padding: "15px"
}

export default  LaunchPage;
