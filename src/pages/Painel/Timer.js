import React, { useState, useEffect } from "react";
import { ContainerTimer, ButtonTimer, Display } from "./styles";

export default function Timer({ initialCount = 300, onCompletion }){
    const [count, setCount] = useState(initialCount);
    const [isActive, setIsActive] = useState(false);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
  
    useEffect(() => {
      let interval = null;
  
      if (isActive && count > 0) {
        interval = setInterval(() => {
          setCount(count - 1);
        }, 1000);
      } else if (count === 0) {
        clearInterval(interval);
        onCompletion();
        setCount(initialCount);
        setIsActive(true); // Comentar essa linha se não desejar reiniciar automaticamente
      }
  
      return () => clearInterval(interval);
    }, [isActive, count, initialCount, onCompletion]);
  
    const handleStart = () => {
      setIsActive(true);
    };
  
    const handleStop = () => {
      setIsActive(false);
    };
  
    const handleReset = () => {
      setIsActive(false);
      setCount(initialCount);
    };
  
    return (
      <ContainerTimer>
        <Display>{formatTime(count)}</Display>
        <div>
          <ButtonTimer onClick={handleStart}>Start</ButtonTimer>
          <ButtonTimer onClick={handleStop}>Stop</ButtonTimer>
          <ButtonTimer onClick={handleReset}>Reset</ButtonTimer>
        </div>
      </ContainerTimer>
    );
  };
  