import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Fab from "@material-ui/core/Fab";
import Icon from '@material-ui/core/Icon';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { title } = task;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="edit" className={classes.fab} size="small" >
            <Icon fontSize="small" >
                edit-icon
            </Icon>
          </Fab>
          <Fab color="primary" aria-label="delete" className={classes.fab} size="small">
            <Icon fontSize="small" >
                delete-icon
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
