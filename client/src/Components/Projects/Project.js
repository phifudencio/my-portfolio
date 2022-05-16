import React from "react";
import "./Project.css";
import { data } from "./projectData";
function Project() {
  return (
    <div>
      <div className="title">
        <h1>Projects</h1>
        
      </div>

      <div className="display-projects">
        {data.map((data, index) => {
          return (
            <div className="project-1">
              <h1>{data.title}</h1>
              <a href={`${data.link}`} target="_blank" rel="noreferrer">
                <img alt="img1" src={data.path} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
