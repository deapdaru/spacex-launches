import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader, Grid } from '@material-ui/core';

const styles = () => ({
  card: {
    backgroundColor: "#ddd",
  }
});

class Launches extends Component {
    render() {
        const { classes } = this.props;
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        
        return this.props.launches.map((launch) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={launch.flight_number}>
                <Link style={linkStyle} to={"/" + launch.flight_number}>
                    <Card variant="outlined" className={classes.card}>
                        <CardActionArea>
                            <CardHeader title={launch.mission_name} subheader={new Date(launch.launch_date_unix*1000).toLocaleDateString("en-GB", options)}/>
                            <CardMedia style={mediaImg} component="img" alt={launch.mission_name} src={launch.links.mission_patch} title={launch.mission_name} /> 
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        ));
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
