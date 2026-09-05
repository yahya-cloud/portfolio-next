import React from "react";

import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Card.css";

const Card = (props) => {
  let iconStyle = {
    color: "#ffff",
    fontSize: props.isSmall ? 25 : 40,
  };

  let cardStyle = {
    backgroundColor: props.backgroundColor,
    gridColumn: props.gridColumn,
    gridRow: props.gridRow,
    backgroundImage: `url(${props.img})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card_overlay">
        <div className="icon_box">
          // <a href={props.viewLink} target="_blank" rel="noreferrer">
          //   <IconButton>
          //     <VisibilityIcon style={iconStyle} />
          //   </IconButton>
          // </a>

          <a href={props.gitLink} target="_blank" rel="noreferrer">
            <IconButton>
              <GitHubIcon style={iconStyle} />
            </IconButton>
          </a>
        </div>

        <div className="infoContainer">
          <a
            className="project_name_link"
            href={props.viewLink}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="project_name">
              {/* {info ? props.about : props.name} */}
              {props.name ? props.name : null}
            </h2>
          </a>

          {props.about ? <p className="project_about">{props.about}</p> : null}
        </div>
      </div>
      {/* <img className='card_img' src={props.url} alt='img'/> */}
    </div>
  );
};

export default Card;
