import React, { useState } from "react";
import Switch from "./Switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-2 left-0 z-[9999] flex justify-center">
      <nav className="w-[95%] md:w-[90%] lg:w-[98%] bg-transparent shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 rounded-lg">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <a href="#" className="mr-4 block cursor-pointer py-1.5 text-xl text-slate-800 font-semibold">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-900">
                <a href="#" className="relative text-lg w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                  About Me
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-900">
                <a href="#" className="relative text-lg w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                  Services
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-900">
                <a href="#" className="relative text-lg w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                  Projects
                </a>
              </li>
              <li className="flex items-center p-1 text-lg gap-x-2 text-slate-900">
                <a href="#" className="relative text-lg w-fit block transition-all duration-300 hover:scale-110 
                  after:block after:content-[''] after:absolute after:h-[3px] after:bg-black 
                  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 
                  after:origin-center">
                  Contact Me
                </a>
              </li>
              <Switch />
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg 
            text-center align-middle text-xs font-medium uppercase text-inherit transition-all 
            hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none 
            disabled:opacity-50 disabled:shadow-none lg:hidden"
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
            <div className="absolute top-full mt-2 w-full rounded-lg shadow-lg p-4 lg:hidden">
              <ul className="flex flex-col gap-4">
                <li className="text-lg text-slate-900"><a href="#">About Me</a></li>
                <li className="text-lg text-slate-900"><a href="#">Services</a></li>
                <li className="text-lg text-slate-900"><a href="#">Projects</a></li>
                <li className="text-lg text-slate-900"><a href="#">Contact Me</a></li>
                <Switch />
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
