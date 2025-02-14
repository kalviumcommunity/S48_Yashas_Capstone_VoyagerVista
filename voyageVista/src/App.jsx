import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./HomePage";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import Web from "./WebHomePage.jsx"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/web" element={<Web />} />
      </Routes>
    </Router>
  );
}

export default App;