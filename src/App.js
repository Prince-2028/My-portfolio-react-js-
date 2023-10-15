import React from "react";
import Home from "./Component/Home";
import Profile from "./Component/Profile";
import Skill from "./Component/Skill";
import Contact from "./Component/Contact";
import "./App.css";
import Footer from "./Footer";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Project from "./Component/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <div className="name">My Portfolio</div>

        <ul className="nav">
          <li>
            {" "}
            <Link className="under" to="./">
              Home
            </Link>
          </li>
          <li>
            <Link className="under" to="./Profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="under" to="./Project">
              Project
            </Link>
          </li>
          <li>
            <Link className="under" to="./Skill">
              Skill
            </Link>
          </li>
          <li>
            <Link className="under" to="./Contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="dark">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Enable To Dark Mode" 
        />
      
        </div> */}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
