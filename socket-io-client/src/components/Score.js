import React from "react";

function Score(props) {
  return (
    <h2 className="Score" style={{ textAlign: "center" }}>
      Score: {props.score}
    </h2>
  );
}

export default Score;
