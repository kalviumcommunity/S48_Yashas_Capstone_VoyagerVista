import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import { useState } from "react";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;