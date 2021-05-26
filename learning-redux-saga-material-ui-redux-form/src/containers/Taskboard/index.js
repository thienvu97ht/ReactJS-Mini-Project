import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Button from "@material-ui/core/button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList/index";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "Read material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play game",
    description: "With my friend",
    status: 2,
  },
  {
    id: 3,
    title: "Play football",
    description: "With my friend",
    status: 1,
  },
];

class TaskBoard extends Component {
  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList key={status.value} task={taskFilter} status={status}/>;
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
