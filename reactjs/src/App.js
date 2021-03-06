import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Biodata from "./components/Biodata";
import Komentar from "./components/Komentar";
import React from "react";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/komentar" element={<Komentar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
