import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App