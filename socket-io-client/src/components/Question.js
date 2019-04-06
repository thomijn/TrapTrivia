import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Question(props) {
  const { classes } = props;

  return (
    <div>
      <Grid item xs={12}>
        <Paper square className={classes.root} elevation={4}>
          <Typography variant="h3" component="h2">
            {props.content}
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default withStyles(styles)(Question);
