import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Task from "./Task.jsx";
import Homepage from "./Homepage.jsx";
import { SmartTaskProvider } from "../hooks/useSmartTask";
import LoginWithEmail from "../authentication/LoginWithEmail.jsx";
import RegisterWithEmail from "../authentication/RegisterWithEmail.jsx";

function App() {
  return (
    <BrowserRouter>
      <SmartTaskProvider>
        <NavBar>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Task" element={<Task />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/login" element={<LoginWithEmail />} />
            <Route path="/register" element={<RegisterWithEmail />} />
          </Routes>
        </NavBar>
      </SmartTaskProvider>
    </BrowserRouter>
  );
}

export default App;
