import React from 'react';
import Home from './components/Home';
import Employee from './components/Employee';
import Position from './components/position';
import Details from './components/Details';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add_employee' element={<Add/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/position' element={<Position/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;