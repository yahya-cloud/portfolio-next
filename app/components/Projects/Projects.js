import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import "./Projects.css";

import { desktopCardList, mobileCardList } from "./projectsListIndex";

const Projects = (props) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let cardList = desktopCardList;
  if (dimensions.width > 0 && dimensions.width <= 900) {
    cardList = mobileCardList;
  }

  return (
    <div className="cards_container" id="projects">
      {cardList.map((card, index) => (
        <Card
          key={card.name}
          viewLink={card.viewLink}
          about={card.info}
          name={card.name}
          isSmall={card.isSmall}
          backgroundColor="#ececec"
          gridRow={card.gridRow}
          gridColumn={card.gridColumn}
          img={card.imgUrl}
          gitLink={card.gitLink}
        />
      ))}
    </div>
  );
};

export default Projects;
