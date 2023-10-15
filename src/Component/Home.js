import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="img">
        <div className="text-name">Hi, I Am</div>
        <div className="text-name1">Prince </div>
        <div className="text-name2">FRONT END WEB DEVELOPER. </div>
        <div className="text-name3">
          <button className="resume">
            <a href="prince resume.pdf" download="resume.pdf">
              {" "}
              Download Resume{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
