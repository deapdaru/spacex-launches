import React, { Component } from 'react';
import { Grid, Card, CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div style={{paddingTop: "15px"}}>
                <Grid container justify="space-around">
                    <Link to="/">
                        <Card style={{backgroundColor: "#ddd"}}>
                            <CardHeader title="Page does not exist! Click here to go back."></CardHeader>
                        </Card>
                    </Link>
                </Grid>
            </div>
        )
    }
}

export default Error;