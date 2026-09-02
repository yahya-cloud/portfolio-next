import React from "react";
import "./Experience.css";
import { ExperienceList } from "./ExperienceListIndex";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

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
                  <span className="meta-label">Position</span>
                  <span className="meta-value">{item.position}</span>
                </div>

                <div className="experience-meta-row">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">
                    {item.location.city}, {item.location.country}
                  </span>
                </div>

                <div className="experience-meta-row">
                  <span className="meta-label">Industry</span>
                  <span className="meta-value">{item.industry}</span>
                </div>

                {/* <div className="experience-meta-row">
                  <span className="meta-label">Website</span>
                  <span className="meta-value">
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
