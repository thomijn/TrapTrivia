import React from "react";

function Question(props) {
  return (
    <h2 className="question" style={{ textAlign: "center" }}>
      {props.content}
    </h2>
  );
}

export default Question;
