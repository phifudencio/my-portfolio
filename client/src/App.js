import React from "react";
import Navigation from "./Components/Nav/Navigation";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Project from "./Components/Projects/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<><Home/><About/><Resume /></>} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
