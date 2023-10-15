import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";


const Profile = () => {
  return (
    <>
      <div className="profile-pic"></div>

      <h1 className="cl1">Hey, I am </h1>
      <h1 className="cl2">Prince Kumar </h1>
      <p className="intro">
        I'm a college student. My career goal is to become a web developer. I
        have a deep interest in Software Engenering , particularly in creating
        user-friendly and visually appealing websites. Currently, I'm honing my
        technical skills, aiming to become a successful web developer in the
        future. Besides that, I have a genuine passion for creative design and
        user-friendly web experiences. For me, web development opens the door to
        a new world where I can express my ideas and creativity.
      </p>
      

      <Link className="under" to="/contact">
        <button className="bn29">Hire Me</button>
    </Link>

    </>
  );
};

export default Profile;
