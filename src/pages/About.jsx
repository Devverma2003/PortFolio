import React from "react";

import ShinyText from "../components/ShinyText";
import StatsCounter from "../components/StatsCounter";
import Skills from "../components/Skills";
const About = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-purple-400 to-indigo-600 ">
        {" "}
        <div className="flex justify-center items-center  text-3xl font-semibold">
          <h2 className="text-center text-3xl font-bold mb-8 ">About Me</h2>
        </div>
        <p className="font-semibold text-lg w-1/2 ml-60 mt-10">
          <ShinyText
            text="I’m a passionate Frontend Developer with expertise in React, JavaScript, and Tailwind CSS. I love building clean, responsive, and user-friendly web applications.
I’m always eager to learn new things, contribute to open-source projects, and create innovative digital experiences. Let’s connect and build something amazing together! "
            disabled={false}
            speed={2}
            className="custom-class "
          />
        </p>
        <Skills />
        <StatsCounter />
      </div>
    </>
  );
};

export default About;
