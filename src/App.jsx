import React from "react";
import LoginPage from "./Components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./Components/RegistrationPage";
import Home from "./Components/Home";
import MainChat from "./Components/Chatroom/MainChat";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/registrationpage"
            element={<RegistrationPage />}
          />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<MainChat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
