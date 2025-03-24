import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import BlobCursor from "./components/BlobCursor";
import About from "./pages/About";
import "./App.css";

import Services from "./pages/Services";

import Project from "./pages/Project";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full  relative">
      <BlobCursor blobType="circle" fillColor="#00f0ff" />
      <Navbar />
      <Home />
    
      
      <About />
      
      <Services />
      
      
      <Project/>
      
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
