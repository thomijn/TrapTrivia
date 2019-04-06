import React from "react";
import PropTypes from "prop-types";

function QuestionCount(props) {
  return (
    <div className="questionCount" style={{ textAlign: "center" }}>
      <h2>
        Question <span>{props.counter}</span> of <span>{props.total}</span>
      </h2>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number,
  total: PropTypes.number
};

export default QuestionCount;
