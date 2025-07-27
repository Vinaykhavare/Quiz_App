import React from 'react'
import "../CSS/Home.css"
import { useNavigate } from 'react-router-dom';
const home = () => {
  const navigate = useNavigate();
  return (
   <div className="home-container">
      <div className="home-content">
        <h1>Welcome to the React Quiz App</h1>
        <p>
          Test your knowledge with fun and interactive quizzes built with React!
          This app features multiple-choice questions, real-time score tracking,
          and instant results.
        </p>
        <p>
          Whether you're preparing for an exam or just want to challenge yourself,
          our quizzes are designed to help you learn and grow.
        </p>
      <button className="get-started-btn" onClick={() => navigate('/instructions')}>
  Get Started
</button>
      </div>
    </div>
  )
}

export default home
