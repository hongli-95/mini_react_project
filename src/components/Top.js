import React from "react";
import selfie from "../images/profile_pic.png";

export default function Top() {
  let toGithub = () => {
    window.open("https://github.com/hongli-95");
  };

  let toLinkedin = () => {
    window.open("https://www.linkedin.com/in/hong-li-7b2761161/");
  };

  return (
    <div>
      <img src={selfie} className="top-img" alt="selfie" />
      <h1 className="top-name">Hong Li</h1>
      <h4 className="top-label">My Links</h4>
      <div className="button-container">
        <button className="button-one" onClick={toGithub}>
          Github
        </button>
        <button className="button-two" onClick={toLinkedin}>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
