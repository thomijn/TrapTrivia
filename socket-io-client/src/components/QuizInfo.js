import React from "react";
import QuestionCount from "../components/QuestionCount";
import PropTypes from "prop-types";
import Score from "../components/Score";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function QuizInfo(props) {
  const { classes } = props;
  return (
    <Paper square className={classes.root} elevation={4}>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Score score={props.score} />
    </Paper>
  );
}

QuizInfo.propTypes = {
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};
export default withStyles(styles)(QuizInfo);
