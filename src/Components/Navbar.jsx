import React, { useState } from 'react';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">QuizApp</a>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/instructions">Instructions</a></li>
        <li><a href="/quiz">Quiz</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
