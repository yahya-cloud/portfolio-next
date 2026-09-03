import React from "react";

import "./Header.css";
import Navbar from "../Navbar/Navbar";

const skills = [
  { label: "Languages", items: "TypeScript, JavaScript, Python, Java, C" },
  {
    label: "Frontend",
    items: "React.js, Angular, Redux, HTML, CSS, Sass, Figma, Adobe XD",
  },
  {
    label: "Backend",
    items: "Node.js, Express.js, FastAPI, SQLAlchemy, Alembic",
  },
  { label: "Databases", items: "MySQL, PostgreSQL, MongoDB" },
  {
    label: "DevOps & Cloud",
    items: "Docker, S3, CloudWatch, ECS, GitLab CI/CD, Git",
  },
  { label: "Testing", items: "Pytest, Cypress, Playwright, Jasmine" },
];

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="menu">
        <Navbar />
      </div>
      <div
        data-aos="fade-right"
        data-aos-easing="ease"
        data-aos-once={true}
        className="text__box"
      >
        <h1 className="text__box--greeting">Hello;</h1>
        <h3 className="text__box--para">
          I’m Yahya, a Software Engineer and M.Sc. AI student actively looking
          for full-time opportunities.
        </h3>

        <a href="/assets/Resume.pdf" download>
          <button className="text__box--button">download CV</button>
        </a>
      </div>
      <div
        className="skills_box"
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-once={true}
      >
        <p className="skills_kicker">Stack</p>
        <h2 className="skills_heading">Technical Skills</h2>
        <div className="skills_list">
          {skills.map((skill) => (
            <div className="skills_item" key={skill.label}>
              <span className="skills_label">{skill.label}</span>
              <span className="skills_value">
                {skill.items.split(", ").map((item) => (
                  <span className="skills_chip" key={item}>
                    {item}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
