import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  './App.css';
import Login from './components/login/login';
import Register from './components/Signup/Register';
import NotFound from './components/NotFound/NotFound';
import Member from './components/Membership/Member';
import SuccessCard from './utility/SuccessCard.js'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Error" element={<NotFound />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Success" element={<SuccessCard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
