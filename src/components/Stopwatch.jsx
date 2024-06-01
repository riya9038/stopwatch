import React, { useEffect, useState } from "react";
import ElapsedTime from "./ElapsedTime";
import Timer from "./Timer";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [lapse, setLapse] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const startTimer = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
    setIsActive(false);
  };

  function stopTimer() {
    setLapse([...lapse, time]);
    setTime(0);
    setIsActive(false);
  }

  function resetTimer() {
    setTime(0);
    setLapse([]);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  return (
    <div className="container">
      <div class="stopwatch">
        <img src={require("../assets/stopwatch.png")} alt="stopwatch" />

        <button className="reset-btn" onClick={resetTimer}>
          Reset
        </button>

        {!isActive ? (
          <button className="start-btn" onClick={startTimer}>
            Start
          </button>
        ) : (
          <button className="pause-btn" onClick={pauseTimer}>
            Pause
          </button>
        )}

        <button className="stop-btn" onClick={stopTimer} disabled={time === 0}>
          Stop
        </button>

        <Timer time={time} />
      </div>

      {!isActive && lapse.length === 0 && (
        <h1 className="starterText">Press Start to begin the timer</h1>
      )}

      {lapse.length > 0 && (
        <div className="lapseContainer">
          <p className="lapsedText">-Time Elapsed-</p>
          <div className="lapseTimeContainer">
            {lapse.map((lap) => {
              return <ElapsedTime time={lap} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
