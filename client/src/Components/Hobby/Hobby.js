import React from 'react'
import YouTube from "react-youtube";
import "./Hobby.css"

function Hobby() {
  return (
    <div className="ytv">
    {/* Title*/}
    <div className="yt_title">
      <h1>Jiu-Jitsu Fights</h1>
    </div>
    {/* Videos Container */}
    <div className="videos">
      <YouTube className="yt" videoId="HX_Z5zC2ZOU" />
      <YouTube className="yt" videoId="1OeV-oAIsrs" />
    </div>
  </div>
  )
}

export default Hobby