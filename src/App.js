import React  from 'react';
import {
  BrowserRouter, Route, Router, Routes, useLocation,
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Auth/Login';
import CreateAccount from './Components/Auth/CreateAccount';
import TestQuiz from './Components/TestQuiz';
import Home from './Components/Home';
import Test from './Components/Test';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    
    
      <Routes>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/CreateAccount" element={<CreateAccount/>} />
        <Route path="/TestQuiz/:subject" element={<TestQuiz/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
