import React, { useState, useRef } from 'react';
// import './Stopwatch.css'; // Import your CSS file
import StopCircleIcon from '@mui/icons-material/StopCircle';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import  Typography  from '@mui/material/Typography';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (milliseconds) => {
    
    const hour = Math.floor (milliseconds/3600000)
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    // const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${padNumber(hour)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  };

  const padNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  return (
    <div className="stopwatch-container">
      <Typography style={{fontSize:'11px',color:'grey'}}> TIME TRACKED</Typography>
      <div style={{fontSize:'11px'}} className="time-display">{formatTime(time)}</div>
      <div className="button-container">
        {isRunning ? (
          <button className="stop-button" onClick={handleStop} style={{border:'none',fontSize:'10px'}}>
           <StopCircleIcon style={{color:'red'}} />
          </button>
        ) : (
          <button style={{border:'none',fontSize:'10px'}} className="start-button" onClick={handleStart}>
            <PlayCircleFilledWhiteIcon style={{color:'green'}}/>
          </button>
        )}
        <button style={{border:'none',fontSize:'10px'}} className="reset-button" onClick={handleReset}>
          < RestartAltIcon/>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;