import React, { Component } from 'react';
import axios from 'axios';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Card, CardHeader, CardMedia, Grid } from '@material-ui/core';

class LaunchPage extends Component {
    state = {
        launch: []
    }

    componentDidMount() {
        this.getLaunch();
    }

    getLaunch = async () => {
        let response = await axios.get(`https://api.spacexdata.com/v3/launches${this.props.location.pathname}`);
        // console.log(response.data);
        this.setState({ launch: response.data })
    }

    render() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        console.log(this.state.launch.links);
        return (
            <div>
                <Breadcrumbs style={breadcrumbStyle} aria-label="breadcrumb">
                    <Link color="inherit" href="/">Home</Link>
                    <Typography color="textPrimary">{this.state.launch.mission_name}</Typography>
                </Breadcrumbs>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Card>
                            <CardHeader title={this.state.launch.mission_name} subheader={new Date(this.state.launch.launch_date_unix*1000).toLocaleDateString("en-GB", options)}/>
                            <CardMedia component="img" alt={this.state.launch.mission_name}  title={this.state.launch.mission_name} />
                        </Card>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        )
    }
}

const breadcrumbStyle = {
    padding: "10px 0 0 10px"
}

export default LaunchPage;
