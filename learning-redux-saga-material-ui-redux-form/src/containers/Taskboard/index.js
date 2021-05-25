import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";

class TaskBoard extends Component {
  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          return (
            <Grid key={status.value} item md={4} xs={12}>
              {status.label}
            </Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
