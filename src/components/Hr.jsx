import React from 'react'

import { useState, useEffect } from "react";

export default function ExpandingHR() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="  relative flex flex-col items-center justify-center  bg-gradient-to-r from-purple-400 to-indigo-600 ">
      {/* Sticky Section to Detect Scroll */}
      <div className="sticky top-0 w-full h-10"></div>

      {/* HR Line Expanding on Scroll */}
      <hr
        className={`border-2 border-slate-700 transition-all duration-500 ${
          isScrolled ? "w-4/5" : "w-32"
        }`}
      />
    </div>
  );
}



