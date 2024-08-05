import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const increment = useRef(null);

  const start = () => {
    if (!isActive) {
      setIsActive(true);
      increment.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (isActive) {
      clearInterval(increment.current);
      setIsActive(false);
    }
  };

  const reset = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <div className="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
      </div>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
