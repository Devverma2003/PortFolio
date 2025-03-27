import Navbar from "./components/Navbar";
import BlobCursor from "./components/BlobCursor";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Services from "./pages/Services";
import Project from "./pages/Project";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full relative">
      <BlobCursor blobType="circle" fillColor="#00f0ff" />
      <Navbar />

     
      <section id="home"><Home/></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="project"><Project /></section>
      <section id="contact"><ContactPage /></section>

      <Footer />
    </div>
  );
}

export default App;
