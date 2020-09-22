import React, { Component } from 'react';
import { Grid, Button, TextField, Divider, Backdrop, CircularProgress } from '@material-ui/core';

class DashBoard extends Component {
  render() {
    return (
      <div style={{padding: "20px 40px 0"}}>
        <form noValidate>
          <Grid container justify="space-around">
            <TextField
              error={this.props.start > this.props.end}
              style={{margin: "3px"}}
              onInput={this.props.setStartDate}
              variant="outlined"
              color="primary"
              id="start"
              label="Start Date"
              type="date"
              defaultValue="2006-03-24"
            />
            <TextField
              error={this.props.start > this.props.end}
              style={{margin: "3px"}}
              onInput={this.props.setEndDate}
              variant="outlined"
              color="primary"
              id="end"
              label="End Date"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
            />
            <Button
              disabled = {this.props.start > this.props.end}
              variant="outlined" 
              color="primary" 
              style={{margin: "3px"}} 
              onClick={this.props.getNewLaunches}
            >
              Filter Launches
            </Button>
            <Backdrop style={{zIndex: "1"}} open={this.props.open}>
              <CircularProgress color="primary" />
            </Backdrop>
            <Button 
              variant="outlined" 
              color="primary" 
              style={{margin: "3px"}} 
              onClick={this.props.reverseLaunches}
            >
              Reverse Order
            </Button>
          </Grid>
        </form>
        <Divider style={{marginTop: "20px"}}/>
      </div>
    )
  }
}

export default DashBoard;