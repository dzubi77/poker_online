import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />}/>
      </Routes>
    </>
  );
}

export default App;