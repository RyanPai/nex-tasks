
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const countDownRef = useRef(null);
  const initialSecondsRef = useRef(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);

  const onStart = () => {
    clearCountDown();
    setIsPaused(false);
    if(minutes || seconds) {
      const total = minutes * 60 + seconds;
      initialSecondsRef.current = initialSecondsRef.current ?? total;
      setTotalSeconds(initialSecondsRef.current);
    }
  }

  const onPauseResume = () => {
    if(isPaused) {
      countDown();
    } else {
      clearCountDown();
    }
    setIsPaused((prev) => !prev);
  }

  const onReset = () => {
    setMinutes(0);
    setSeconds(0);
    setTotalSeconds(0);
    initialSecondsRef.current = null
    clearCountDown();
  }

  function clearCountDown() {
    if(countDownRef.current) {
      clearInterval(countDownRef.current);
      countDownRef.current = null;
    }
  }

  function formatTwoDigits(n) {
    return String(n).padStart(2, '0')
  }
  
  function countDown() {
    countDownRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if(prev <= 1) {
          clearCountDown();
          return 0;
        }
        return prev - 1
      });
    }, 1000);
  }

  useEffect(() => {
    if(totalSeconds === 0 && countDownRef.current) {
      clearCountDown();
    } else if(totalSeconds > 0 && !countDownRef.current) {
      countDown();
    }

    return () => clearCountDown();
  }, [totalSeconds]);

  return (
    <>
      <label>
        <input type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} /> 
          Minutes 
      </label> 
      <label>
        <input type="number" value={seconds}  onChange={(e) => setSeconds(parseInt(e.target.value) || 0)} /> 
        Seconds
      </label> 
      <button onClick={onStart} >START</button> 
      <button onClick={onPauseResume}>{isPaused ? "RESUME" : "PAUSE"}</button> 
      <button onClick={onReset}>RESET</button> 
      <h1 data-testid="running-clock">{`${formatTwoDigits(Math.floor(totalSeconds / 60))}:${formatTwoDigits(totalSeconds % 60)}`}</h1>
    </>
  )
}

export default App
