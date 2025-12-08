import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Line from "./components/Line";
import PlantAtlas from './pages/PlantAtlas';
import SDNHM from './pages/SDNHM';



function App() {
  return (
    <Router>
      <div className="bg-background">
        <NavBar className="p-4" /> 
        <div className="flex justify-center pt-2 pb-12">
          <Line length="95%" />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/sdnhm" element={<SDNHM />} />

          <Route path="/plantatlas" element={<PlantAtlas />} />
 
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;