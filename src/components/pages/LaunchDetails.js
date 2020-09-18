import React, { Component } from 'react';
import { ButtonGroup, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import YouTubeIcon from '@material-ui/icons/YouTube';

class LaunchDetails extends Component {
    render() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const launchStyle = {
            color: this.props.launch.launch_success ? "#4caf50" : "#f44336"
        }
        const detailsStyle = {
            display: this.props.launch.details !== null ? "block" : "none"
        }
        const launchImg1 = {
            display: this.props.launch.links !== undefined ? (this.props.launch.links.flickr_images[0] !== undefined ? "block" : "none") : "none"
        }
        const launchImg2 = {
            display: this.props.launch.links !== undefined ? (this.props.launch.links.flickr_images[0] !== undefined ? "block" : "none") : "none",
            maxWidth: "500px",
            margin: "0 auto"
        }
        console.log(this.props.launch.links !== undefined ? (this.props.launch.links.flickr_images[0] !== undefined ? "block" : "none") : "none");
        return (
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <Card style={{backgroundColor: "#ddd"}}>
                        <CardHeader title={"Mission Name: " + this.props.launch.mission_name} subheader={new Date(this.props.launch.launch_date_unix*1000).toLocaleDateString("en-GB", options)}/>
                        <CardMedia style={cardImg} component="img" alt={this.props.launch.mission_name} src={this.props.launch.links !== undefined ? this.props.launch.links.mission_patch: ""} title={this.props.launch.mission_name} />
                        <CardContent>
                            <Typography variant="body1">{"Name of the rocket launched was " + (this.props.launch.rocket !== undefined ? this.props.launch.rocket.rocket_name : "") + "."}</Typography>
                            <Typography variant="body1">{"Name of the launch site was " + (this.props.launch.launch_site !== undefined ? (this.props.launch.launch_site.site_name_long + " (" + this.props.launch.launch_site.site_name + ")") : "") + "."}</Typography><br/>
                            <Typography variant="body1" style={launchStyle}>{"Launch Status: " + (this.props.launch.launch_success ? "Success!" : "Failure!")}</Typography>
                            <Typography variant="body1" style={detailsStyle}>{"Details of the launch: " + this.props.launch.details}</Typography><br/>
                            <Typography variant="body1" style={launchImg1}>A picture of the launch: </Typography><br/>
                            <CardMedia component="img" style={launchImg2} alt={this.props.launch.mission_name} src={this.props.launch.links !== undefined ? (this.props.launch.links.flickr_images !== null ? this.props.launch.links.flickr_images[0] : "") : ""}/><br/>
                            <Typography variant="body1">To know more about the launch visit the following sites:</Typography><br/>
                            <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group">
                                <Button startIcon={<DescriptionIcon />} href={this.props.launch.links !== undefined ? this.props.launch.links.wikipedia: ""}>Wikipedia</Button>
                                <Button endIcon={<YouTubeIcon />} href={this.props.launch.links !== undefined ? this.props.launch.links.video_link: ""}>Youtube</Button>
                            </ButtonGroup>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        )
    }
}

const cardImg = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px 0"
}

export default LaunchDetails;