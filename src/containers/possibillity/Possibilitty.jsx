import React from "react";
import "./possibilitty.css";
import possibilityimage from "../../assets/possibility.png";
function Possibilitty() {
  return (
    <div className="maker__possibility section__padding" id="possibility">
      <div className="maker__possibility-image">
        <img src={possibilityimage} alt="possibilityimage" />
      </div>
      <div className="maker__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibilitty;
