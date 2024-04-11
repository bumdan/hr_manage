import React from 'react';
import Home from './components/Home';
import Employee from './components/Employee';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add_employee' element={<Add/>}/>
        <Route path='/employee' element={<Employee/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;