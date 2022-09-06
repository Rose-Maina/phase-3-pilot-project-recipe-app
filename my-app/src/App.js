import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
            <Routes>
              <Route exact path="/home" element={<Home/>}></Route>
              <Route exact path="/login" element={<Login />}></Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
