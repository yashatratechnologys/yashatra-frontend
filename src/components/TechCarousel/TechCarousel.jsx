import React from "react";
import "./TechCarousel.css";

import python from "../../assets/TechCarousel/python.png";
import java from "../../assets/TechCarousel/java.png";
import react from "../../assets/TechCarousel/react.png";
import node from "../../assets/TechCarousel/node.png";
import mongodb from "../../assets/TechCarousel/spring.png";

const technologies = [
  { name: "Python", logo: python },
  { name: "Java", logo: java },
  { name: "React", logo: react },
  { name: "Node.js", logo: node },
  { name: "MongoDB", logo: mongodb },
];

const TechCarousel = () => {
  return (
    <div className="techname">
      <h1>Our Technologies</h1>

    <div className="tech-carousel">
      
      <div className="tech-track">
        {/* duplicate for infinite scroll */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.logo} alt={tech.name} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default TechCarousel;
