import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Result(props) {
  const { classes } = props;
  return (
    <Grid item>
      <Paper square className={classes.root} elevation={4}>
        <Typography variant="h5">
          Eindresultaat... <br />
          <strong>{props.quizResult}</strong>!
        </Typography>

        <Button variant="contained" color="primary" onClick={props.onTryAgain}>
          Speel Opnieuw!
        </Button>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(Result);
