import React from "react";
import Question from "../components/Question";
import Answer from "../components/Answer";

function Quiz(props) {
  return (
    <div className="quiz">
      <Question content={props.question} />
      <Answer />
    </div>
  );
}

export default Quiz;
