import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/About" element={<About/>}></Route>
              <Route exact path="/Signup" element={<Signup />}></Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
