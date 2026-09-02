import React from "react";
import "./Education.css";

const educationList = [
  {
    school: "Brandenburg University of Technology",
    website: "https://www.b-tu.de/",
    location: "Cottbus, Germany",
    degree: "M.Sc. in Artificial Intelligence",
    graduation: "Expected Graduation: February 2027",
    timeline: "APR 2024 - Present",
    coursework:
      "Data Mining, Explainable ML, Computing at Scale with ML, Statistics",
  },
  {
    school: "Jamia Hamdard University",
    website: "https://jamiahamdard.edu/",
    location: "New Delhi, India",
    degree: "B.Tech. in Computer Science Engineering",
    graduation: "",
    timeline: "AUG 2019 - JUN 2023",
    coursework:
      "Data Structures, Design and Analysis of Algorithms, Operating Systems, DBMS",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-wrapper">
        <h1 className="education-heading">EDUCATION</h1>
        <div className="education-line" />

        <div className="education-list">
          {educationList.map((item) => (
            <article className="education-item" key={item.school}>
              <div className="education-school-block">
                <a
                  className="education-school"
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.school}
                </a>
                <p className="education-location">{item.location}</p>
              </div>

              <div className="education-detail-block">
                <h2 className="education-degree">{item.degree}</h2>
                {item.graduation ? (
                  <p className="education-graduation">{item.graduation}</p>
                ) : null}
                <p className="education-coursework">
                  <span>Coursework:</span> {item.coursework}
                </p>
              </div>

              <p className="education-timeline">{item.timeline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
