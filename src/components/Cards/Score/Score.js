import React from "react";

function Score(props) {
  return (
    <div>
      <p>score: {props.score}</p>
      <p>max score: {props.maxScore}</p>
    </div>
  );
}

export default Score;
