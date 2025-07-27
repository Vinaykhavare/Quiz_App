import React from 'react'
import "../CSS/Instructions.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Instructions = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (agreed) navigate('/quiz');
  };
  return (
    <div className="instructions-container">
      <div className="instructions-box">
        <h1>📘 Quiz Instructions</h1>
        <ul>
          <li>You will be presented with multiple-choice questions.</li>
          <li>Each correct answer gives you 1 point.</li>
          <li>No negative marking for wrong answers.</li>
          <li>Final score will be displayed at the end.</li>
        </ul>

        <div className="checkbox">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <label htmlFor="agree"> I have read and agree to the instructions.</label>
        </div>

        <button disabled={!agreed} onClick={handleStart}>
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default Instructions
