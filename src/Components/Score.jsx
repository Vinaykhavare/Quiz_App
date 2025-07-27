import React from 'react'
import "../CSS/Score.css"
import { useLocation, useNavigate } from 'react-router-dom';
const Score = () => {
   const { state } = useLocation();
  const navigate = useNavigate();
  const { score, total, answers } = state || {};
  return (
      <div className="result-container">
      <div className="result-box">
        <h1>Quiz Completed ✅</h1>
        <h2>Your Score: {score} / {total}</h2>

        <div className="summary">
          {answers.map((item, index) => (
            <div key={index} className="question-summary">
              <p><strong>Q{index + 1}:</strong> {item.question}</p>
              <p>
                <span className={item.selected === item.correct ? 'correct' : 'wrong'}>
                  Your Answer: {item.selected}
                </span>
              </p>
              {item.selected !== item.correct && (
                <p className="correct-answer">Correct Answer: {item.correct}</p>
              )}
              <hr />
            </div>
          ))}
        </div>

        <button onClick={() => navigate('/quiz')}>Try Again</button>
      </div>
    </div>
  )
}

export default Score
