import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

class App extends Component {
  render() {
    console.log("props: ", this.props)
    const {classes} = this.props
    return (
      <div className="App">
        <h1>Hello Redux Saga</h1>
        <Button variant="contained" color="primary">
          Material UI Button
        </Button>
        <div className={classes.box}>
          <div className={classes.shape}>React JS</div>
          <div className={classes.shape}>Angular JS</div>
          <div className={classes.shape}>Vue JS</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
