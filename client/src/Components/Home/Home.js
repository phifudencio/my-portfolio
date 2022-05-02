import React from "react";
import banner from "../img/banner.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="bannerTxt">
        <h1>I'm Matheus Drumond</h1>
        <h3>
          I'm a Vermont based <span>Student && Jiu-Jitsu Fighter</span> by day
          and programer by night
        </h3>
      </div>
      <div className="Banner">
        <img src={banner} alt="banner" className="banner" />
      </div>
    </div>
  );
}

export default Home;
