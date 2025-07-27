import React from 'react';
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} QuizApp. All rights reserved.</p>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/quiz">Quiz</a>
        <a href="/instructions">Instructions</a>
      </div>
    </footer>
  );
};

export default Footer;
