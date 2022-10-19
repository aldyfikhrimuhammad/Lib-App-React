import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";
import Detail from "../Detail";
import Login from "../Login";
import Register from "../Register";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App