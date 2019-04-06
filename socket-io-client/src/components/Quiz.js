import React from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";
<<<<<<< HEAD
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

function Quiz(props) {
  return (
    <Grid
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      container
      spacing={24}
    >
      <Grid item>
        <Question content={props.question} />
      </Grid>
      <Grid item>
        <Answer
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
          answercontent={props.answercontent}
        />
      </Grid>
    </Grid>
  );
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

=======

function Quiz(props) {
  return (
    <div className="quiz">
      <Question content={props.question} />
      <Answer />
    </div>
  );
}

>>>>>>> origin/master
export default Quiz;
