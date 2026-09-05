import React from "react";
import "./Education.css";

const educationList = [
  {
    name: "Brandenburg University of Technology",
    website: "https://www.b-tu.de/",
    location: { country: "Germany", city: "Cottbus" },
    degree: "M.Sc. in Artificial Intelligence",
    graduation: "Expected Graduation: February 2027",
    timeline: { start: "APR 2024", end: "Present" },
    courseWork:
      "Data Mining, Explainable ML, Computing at Scale with ML, Statistics",
  },
  {
    name: "Jamia Hamdard University",
    website: "https://jamiahamdard.edu/",
    location: { country: "India", city: "New Delhi" },
    degree: "B.Tech. in Computer Science Engineering",
    graduation: "",
    timeline: { start: "AUG 2019", end: "JUN 2023" },
    courseWork:
      "Data Structures, Design and Analysis of Algorithms, Operating Systems, DBMS",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-wrapper">
        <h1 className="education-heading">EDUCATION</h1>
        <div className="sections_line" />

        {educationList.map((item, index) => {
          return (
            <div className="education-item" key={index}>
              <div className="education-left">
                <a
                  className="education-company-link"
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="education-company">{item.name}</h2>
                </a>

                <p className="education-duration">
                  {item.timeline.start} — {item.timeline.end}
                </p>
              </div>

              <div className="education-middle">
                <div className="education-meta-row">
                  <span className="meta-label">Degree</span>
                  <span className="meta-value">{item.degree}</span>
                </div>

                <div className="education-meta-row">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">
                    {item.location.city}, {item.location.country}
                  </span>
                </div>

                <div className="education-meta-row">
                  <span className="meta-label">Status</span>
                  <span className="meta-value">
                    {item.graduation || "Graduated"}
                  </span>
                </div>
              </div>

              <div className="education-right">
                <p className="education-bullet-point">
                  <strong>Coursework:</strong> {item.courseWork}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
