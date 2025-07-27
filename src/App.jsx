import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Quiz from './Components/Quiz'
import Score from './Components/Score'
import Home from "./Components/home"
import Instructions from "./Components/Instructions"
import Navbar from './Components/Navbar'
import Footer from "./Components/footer"

function App() {
 
  return (
    <>
    <div>
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/instructions' element={<Instructions/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
         <Route path='/score' element={<Score/>}></Route>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
    
    </>
  )
}

export default App
