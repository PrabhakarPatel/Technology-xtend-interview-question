import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import From from "./pages/From";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<From />} />
      </Routes>
    </div>
  );
};

export default App;
