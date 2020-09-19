import React, { Component } from 'react';
import axios from 'axios';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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
        let response = await axios.get(`https://api.spacexdata.com/v3/launches${this.props.location.pathname}`);
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
