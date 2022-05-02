import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-education">
        <h1>Education</h1>
        <div className="education">
          <h1>Burlington Code Academy</h1>
          <p>Full Stack Web Developer - December / 04 / 2020</p>
          <p>Java Script - May 2020 </p>
          <h2>Escola Profissionalizante Santo Agostinho</h2>
          <p>Redes e Manutencao de Computadores - 2012</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="resume-experience">
        <h1>Work Experience</h1>
        <h1>Sofware Developer Experience</h1>
        <p> Phantom Theater website Capstone Project - Nov/2020 to Dec/2020</p>
        <div className="work">
          <h1>United Parcel Service - UPS</h1>
          Ground Driver - August 2021 - Present
          <h1>OkClean Cleaning Service</h1>
          <p>
            Family-Owned Industrial Cleaning Business - Jan/2014 - July/2021
          </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="resume-skills">
        <h1>Skills</h1>
        <h1> Programming Languages </h1>
        <p>
          JavaScript(React, Nodejs) HTML || CSS MongoDB || Firebase Express ||
          Passport || Bootstrap Git || GitHub VSCode
        </p>
        <h1>Spoken Languages</h1>
        <p>Brazilian Portuguese || English</p>
      </div>
    </div>
  );
}

export default Resume;
