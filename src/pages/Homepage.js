import React from "react";
import "../scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import GotToTop from "../components/GotToTop";

const Homepage = () => {
  return (
    <div className="homepage px-5">
      <Navbar />
      <Home />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Certifications/>
      <GotToTop/>
    </div>
  );
};

export default Homepage;
