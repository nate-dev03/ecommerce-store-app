import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div> 
    </Router>
  )
}

export default App
