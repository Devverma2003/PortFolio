import React from "react";
import SplitText from "../components/SplitText";
import Button from "../components/Button";
const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    
    <div className="bg-gradient-to-b from-purple-400 to-indigo-600">
      
      <div className="flex justify-center items-center mt-36 ">
        <img
          className="h-64 w-64 transition-all duration-300 rounded-full blur-sm hover:blur-none relative "
          src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym95fGVufDB8fDB8fHww"
          alt="image description"
        />
      </div>
      <div className="mt-16 ml-16">
        <h3 className="bg-gradient-to-r from-slate-600 to-slate-950 bg-clip-text text-transparent text-4xl font-bold mb-3 relative">
          I'm Dev Verma , Full Stack Developer
        </h3>
        <SplitText
          text="I am  Specialized in Modern and Responsive Web Applications."
          className="mt-4 ml-80 text-slate-800 text-4xl font-bold text-center  "
          delay={70}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <Button/>
    </div>
  );
};

export default Home;
