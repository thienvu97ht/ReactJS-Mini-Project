import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import TaskItem from "../TaskItem/index"

class TaskList extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Grid key={status.value} item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {task.map((task, index) => {
            return (
              <TaskItem key={task.id} task={task} status={status} />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
