import React from "react";
import banner from "../img/banner.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="bannerTxt">
        <h1>I'm Matheus Drumond</h1>
        
      </div>
      <div className="Banner">
        <img src={banner} alt="banner" className="banner" />
      </div>
    </div>
  );
}

export default Home;
