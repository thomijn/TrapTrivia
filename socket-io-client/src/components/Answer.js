import React from "react";
import PropTypes from "prop-types";
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

function Answer(props) {
  const { classes } = props;
  return (
    <div style={{ textAlign: "center" }} className="answerOption">
      <Grid item xs={12}>
        <Paper square className={classes.root} elevation={4}>
          <Typography variant="h6">
            <p>geselecteerde antwoord </p>
            <hr />
            <div className={props.getAnswerClasses}>
              <p>{props.answercontent}</p>
            </div>
          </Typography>
          <hr />
          <Button
            variant="contained"
            color="primary"
            onClick={props.onAnswerSelected}
          >
            Invoeren
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

Answer.propTypes = {
  onAnswerSelected: PropTypes.func.isRequired
};

export default withStyles(styles)(Answer);
