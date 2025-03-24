import React from "react";
import SplitText from "../components/SplitText";
import Button from "../components/Button";

const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="bg-gradient-to-b from-purple-400 to-indigo-600 min-h-screen flex flex-col items-center px-4">
      
      {/* Image Section */}
      <div className="flex justify-center items-center mt-20 sm:mt-32">
        <img
          className="h-48 w-48 sm:h-64 sm:w-64 transition-all duration-300 rounded-full blur-sm hover:blur-none"
          src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95fGVufDB8fDB8fHww"
          alt="image description"
        />
      </div>

      {/* Text Section */}
      <div className="mt-12 sm:mt-16 text-center sm:text-left">
        <h3 className="bg-gradient-to-r from-slate-600 to-slate-950 bg-clip-text text-transparent text-3xl sm:text-4xl font-bold mb-3">
          I'm Dev Verma, Full Stack Developer
        </h3>
        <SplitText
          text="I am Specialized in Modern and Responsive Web Applications."
          className="mt-4 text-slate-800 text-lg sm:text-2xl font-bold sm:text-center"
          delay={70}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>

      {/* Button */}
      <div className="mt-8">
        <Button />
      </div>
    </div>
  );
};

export default Home;
