import React, { ReactElement } from "react";
import about from "../images/about.svg";

function About(): ReactElement {
  return (
    <div className="container">
      <h2>เกี่ยวกับเรา</h2>
      <img src={about} alt="about" />
    </div>
  );
}

export default About;
