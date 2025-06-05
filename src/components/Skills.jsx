import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

const skills = [
  { title: "HTML", percentage: 95, gradientId: "grad1" },
  { title: "CSS & TAILWIND", percentage: 90, gradientId: "grad2" },
  { title: "JAVASCRIPT", percentage: 80, gradientId: "grad3" },
  { title: "REACT", percentage: 80, gradientId: "grad4" },
];

const GradientCircle = ({ gradientId }) => (
  <svg style={{ height: 0 }}>
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#8000ff" />
      </linearGradient>
    </defs>
  </svg>
);

const Skills = () => {
  const [progress, setProgress] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) =>
      setInterval(() => {
        setProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[index] < skill.percentage) {
            newProgress[index] += 2;
          }
          return newProgress;
        });
      }, 50)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out", // smoother animation
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden px-4 pt-10 ">
      <div className="max-w-5xl mx-auto relative overflow-hidden">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="text-center p-2 sm:p-4">
              <GradientCircle gradientId={skill.gradientId} />
              <div className="w-32 h-32 mx-auto">
                <CircularProgressbar
                  value={progress[index]}
                  text={`${progress[index]}%`}
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: `url(#${skill.gradientId})`,
                    trailColor: "rgba(255,255,255,0.2)",
                  })}
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{skill.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
