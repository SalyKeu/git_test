import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Task from "./Task.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes>
          <Route path="*" element={<Navigate to="/Homepage" />} />
          <Route path="/Task" element={<Task />} />
        </Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
