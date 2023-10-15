import React from "react";
import "./Skill.css";
import "boxicons";

const Skill = () => {
  return (
    <>
      <h1>Technical Skill</h1>
      <div className="skill-bars">
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "80%" }} />
          <div className="skill-name">html</div>
          <div className="percentage">80%</div>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "71%" }} />
          <div className="skill-name">JavaScript</div>
          <div className="percentage">71%</div>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "68%" }} />
          <div className="skill-name">Bootstrap</div>
          <div className="percentage">68%</div>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "58%" }} />
          <div className="skill-name">CSS</div>
          <div className="percentage">58%</div>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "52%" }} />
          <div className="skill-name">React</div>
          <div className="percentage">50%</div>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "45%" }} />
          <div className="skill-name">Python</div>
          <div className="percentage">45%</div>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" style={{ width: "35%" }} />
          <div className="skill-name">C</div>
          <div className="percentage">35%</div>
        </div>
      </div>

      <h1 className="nam"> Professional Skill</h1>
      <div className="pk">
        <div className="circle">
          <div className="inner-circle">
            <span>56%</span>
          </div>
        </div>
        <span>Communation</span>
        <div className="circle">
          <div className="inner-circle">
            <span>60%</span>
          </div>
        </div>
        <span>Team work</span>
        <div className="circle">
          <div className="inner-circle">
            <span>80%</span>
          </div>
        </div>
        <span>Project Managament </span>
        <div className="circle">
          <div className="inner-circle">
            <span>70%</span>
          </div>
        </div>
        <span>Creativity</span>
      </div>

      <section className="services" id="services">
        <div className="heading">
          <h2 className="center">Services</h2>
          <span className="ter">My Services</span>
        </div>
        <div className="services-content">
          <div className="services-box">
            <box-icon name="code-alt"></box-icon>
            <h3>Web Development</h3>
            <a href="#">Learn More</a>
          </div>
          <div className=""></div>
          <div class="services-box">
            <box-icon name="server" type="solid"></box-icon>
            <h3>Backend Development</h3>
            <a href="#">Learn More</a>
          </div>
          <div class="services-box">
            <box-icon name="brush" type="solid"></box-icon>
            <h3>UI/UX Design</h3>
            <a href="#">Learn More</a>
          </div>

          <div class="services-box">
            <box-icon name="android" type="logo"></box-icon>
            <h3>App Development</h3>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
