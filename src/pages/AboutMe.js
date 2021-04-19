import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="main-div">
      <h1>About Me</h1>
      <div className="aboutMe">
        <h1>Name: Debjit Chakraborty</h1>
        <h1>Roll: 1806551</h1>
        <h1>
          Github: <Link to="https://github.com/xayron"> Xayron</Link>
        </h1>
        <h1>Skills: Javascript, HTML, CSS, Java, C/C++, Dart, Python, SQL</h1>
        <br />
        <h1>Projects:</h1>
        <br />
        <div className="projects-div">
          <h1>
            <ol>
              {projects.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

const projects = [
  "Invoice Management Application: An application in React that helps to track the invoice generated during business to business transaction.",
  "Covid Tracker App: An app written in Dart, using Flutter framework to track the current case of covid."
];
