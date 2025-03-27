import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-2 left-0 z-[9999] flex justify-center">
      <nav className="w-[95%] md:w-[90%] lg:w-[98%] bg-transparent shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 rounded-lg">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          {/* Logo */}
          <a href="#home" className="mr-4 cursor-pointer py-1.5 text-xl text-slate-800 font-semibold flex items-center h-[50px]">
            <img src="https://i.postimg.cc/Y9VCxSsD/logo.png" alt="logo" className="h-[45px] w-auto scale-150" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
              <li className="items-center p-1 text-lg gap-x-2 text-slate-900 relative  w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                <a href="#about">About Me</a>
              </li>
              <li className="items-center p-1 text-lg gap-x-2 text-slate-900 relative  w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                <a href="#services">Services</a>
              </li>
              <li className=" items-center p-1 text-lg gap-x-2 text-slate-900 relative  w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                <a href="#project">Projects</a>
              </li>
              <li className=" items-center p-1 text-lg gap-x-2 text-slate-900 relative  w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative ml-auto h-6 w-6 select-none rounded-lg lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-full mt-2 w-full bg-white shadow-lg p-4 rounded-lg lg:hidden">
              <ul className="flex flex-col gap-4">
                <li className="text-lg text-slate-900">
                  <a href="#about" onClick={() => setIsOpen(false)}>About Me</a>
                </li>
                <li className="text-lg text-slate-900">
                  <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                </li>
                <li className="text-lg text-slate-900">
                  <a href="#project" onClick={() => setIsOpen(false)}>Projects</a>
                </li>
                <li className="text-lg text-slate-900">
                  <a href="#contact" onClick={() => setIsOpen(false)}>Contact Me</a>
                </li>
          
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
