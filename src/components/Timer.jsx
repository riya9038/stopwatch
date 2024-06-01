import React from "react";

const Timer = ({ time }) => {
  return (
    <div class="timer">
      <span>{("0" + Math.floor((time / 60000000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
  );
};

export default Timer;
