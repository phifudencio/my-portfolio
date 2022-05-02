import React from "react";
import mypic from "../img/mypic.jpg";
import "./About.css";
import { Button } from "react-bootstrap";
function About() {
  return (
    <div className="about-container">
      <div>
        <img className="mypic" alt="mypic" src={mypic}></img>
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          My name is Matheus Drumond, I'm a Student and avid Jiu-jitsu fighter.
          Currently I'm working at UPS as a driver and persuing my carrear as a developer.
        </p>
        <Button variant="secondary" href={require("../img/resume.pdf")} download="resume" >
          Download Resume
        </Button>
      </div>
      
    </div>
  );
}

export default About;
