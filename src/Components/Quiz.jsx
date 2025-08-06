import React, { useState } from 'react';
import '../CSS/Quiz.css';
import { useNavigate } from 'react-router-dom';
import questions from '../Data/questions';

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (selected) => {
    const correct = questions[current].answer;
    const updatedScore = selected === correct ? score + 1 : score;

    const newAnswers = [...answers];
    newAnswers[current] = {
      question: questions[current].question,
      selected,
      correct,
    };

    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setScore(updatedScore);
    } else {
      navigate('/score', {
        state: {
          score: selected === correct ? updatedScore : score,
          total: questions.length,
          answers: newAnswers,
        },
      });
    }
  };

  const jumpToQuestion = (index) => {
    setCurrent(index);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="quiz-box fade-in">
          <h2 className="question">
            {current + 1}. {questions[current].question}
          </h2>

          <div className="options">
            {questions[current].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>

          <div className="progress">
            Question {current + 1} of {questions.length}
          </div>
        </div>

        <div className="sidebar">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => jumpToQuestion(i)}
              className={`number-btn ${
                i === current
                  ? 'active'
                  : answers[i]
                  ? 'answered'
                  : 'unanswered'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
