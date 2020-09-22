import React, { Component } from 'react';
import axios from 'axios';
import { Breadcrumbs, Typography, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import LaunchDetails from './LaunchDetails';

class LaunchPage extends Component {
    state = {
        launch: []
    }

    componentDidMount() {
        this.getLaunch();
    }

    getLaunch = async () => {
        let response = await axios.get(`https://api.spacexdata.com/v3/launches/${this.props.match.params.flight_number}`);
        this.setState({ launch: response.data })
    }

    render() {
        return (
            <div>
                <Breadcrumbs style={breadcrumbStyle} aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        <HomeIcon />
                    </Link>
                    <Typography color="textPrimary">{this.state.launch.mission_name}</Typography>
                </Breadcrumbs>
                <LaunchDetails launch={this.state.launch}/>
            </div>
        )
    }
}

const breadcrumbStyle = {
    padding: "15px"
}

export default  LaunchPage;
