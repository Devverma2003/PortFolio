import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hr from "./components/Hr";
import BlobCursor from "./components/BlobCursor";
import About from "./pages/About";
import "./App.css";
import Button from "./components/button";
import Services from "./pages/Services";
import Card from "./components/Card";
import Project from "./pages/Project";

function App() {
  return (
    <div className="w-full  relative">
      <BlobCursor blobType="circle" fillColor="#00f0ff" />
      <Navbar />
      <Home />
      <Button />
      <Hr />
      <About />
      <div className="mt-[-8rem]">
        <Hr />
      </div>
      <Services />
      <Card />
      <div className="mt-[-2rem]">
        <Hr />
      </div>
      <Project/>
    </div>
  );
}

export default App;
