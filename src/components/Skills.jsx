import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Skills.css';

const skills = [
  { title: "HTML ", percentage: 95, gradientId: "grad1" },
  { title: "CSS & TAILWIND", percentage: 90, gradientId: "grad2" },
  { title: "JAVASCRIPT", percentage: 80, gradientId: "grad3" },
  { title: "REACT", percentage: 80, gradientId: "grad4" },
  // { title: "NODE JS", percentage: 70, gradientId: "grad5" },
];

const GradientCircle = ({ percentage, gradientId }) => (
  <svg style={{ height: 0 }}>
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff00ff" /> {/* Pink */}
        <stop offset="100%" stopColor="#8000ff" /> {/* Purple */}
      </linearGradient>
    </defs>
  </svg>
);

const Skills = () => {
  const [progress, setProgress] = useState(skills.map(() => 0)); // Initialize all to 0

  useEffect(() => {
    const intervals = skills.map(
      (skill, index) =>
        setInterval(() => {
          setProgress((prev) => {
            const newProgress = [...prev];
            if (newProgress[index] < skill.percentage) {
              newProgress[index] += 2; // Increase by 2% every interval
            }
            return newProgress;
          });
        }, 50) // Adjust speed (50ms for smoother animation)
    );

    return () => intervals.forEach(clearInterval); // Cleanup on unmount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: Show 3 slides
    slidesToScroll: 1,
    adaptiveHeight: true, // Ensures smooth navigation
    arrows: false, // Disable arrows
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Change slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: { slidesToShow: 1 },
      },
    ],
  };
  
  

  
  
  

  return (
    <div className=" relative pt-10 px-4 ">
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="text-center p-4">
              <GradientCircle gradientId={skill.gradientId} />
              <div className="w-32 h-32 mx-auto">
                <CircularProgressbar
                  value={progress[index]} // Animated progress value
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
}
  

export default Skills;
