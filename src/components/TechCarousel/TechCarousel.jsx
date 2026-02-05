import React from "react";

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
    <section className="w-full bg-[#ce6a6a] py-16 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white tracking-wide">
          Our Technologies
        </h2>
        <p className="text-white/80 mt-2">
          Tools & technologies we work with
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <div
          className="
            flex w-max
            animate-[scroll_20s_linear_infinite]
          "
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[160px] mx-5
                text-center text-white
                group
              "
            >
              <div
                className="
                  flex items-center justify-center
                  w-20 h-20 mx-auto mb-3
                  rounded-full bg-white/10
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="
                    w-14 h-14 object-contain
                    transition duration-300
                  "
                />
              </div>

              <p className="text-sm tracking-wide">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default TechCarousel;
