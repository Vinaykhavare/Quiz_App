import React from 'react'
import "../CSS/Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🧠 QuizApp</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
       <li><Link to="/instructions">Quiz</Link></li>
        
      </ul>
    </nav>
  )
}

export default Navbar
