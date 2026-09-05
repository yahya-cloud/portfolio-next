import React from "react";
import "./Experience.css";
import { ExperienceList } from "./ExperienceListIndex";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-wrapper">
        <h1 className="experience-heading">EXPERIENCE</h1>
        <div className="experience-line" />

        {ExperienceList.map((item, index) => {
          return (
            <div className="experience-item" key={index}>
              <div className="experience-left">
                <a className="experience-company-link" href={item.website} target="_blank" rel="noopener noreferrer">
                  <h2 className="experience-company">{item.name}</h2>
                </a>

                <p className="experience-duration">
                  {item.timeline.start} — {item.timeline.end}
                </p>
              </div>

              <div className="experience-middle">
                <div className="experience-meta-row">
                  <span className="experience-meta-label">Position</span>
                  <span className="experience-meta-value">{item.position}</span>
                </div>

                <div className="experience-meta-row">
                  <span className="experience-meta-label">Location</span>
                  <span className="experience-meta-value">
                    {item.location.city}, {item.location.country}
                  </span>
                </div>

                <div className="experience-meta-row">
                  <span className="experience-meta-label">Industry</span>
                  <span className="experience-meta-value">{item.industry}</span>
                </div>

                {/* <div className="experience-meta-row">
                  <span className="experience-meta-label">Website</span>
                  <span className="experience-meta-value">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.website
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </a>
                  </span>
                </div> */}
              </div>

              <div className="experience-right">
                <ul>
                  {item.bulletPoints?.map((point, idx) => (
                    <li className="experience-bullet-point" key={idx}>{point}</li>
                  ))}
                </ul>

                {/* <List
                  sx={{
                    width: "100%",
                  }}
                >
                  {item.bulletPoints?.map((point, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
