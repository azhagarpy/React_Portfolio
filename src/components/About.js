import React from "react";
import { Fade,Bounce} from "react-reveal";
import SocialLinks from "./SocialLinks";
const About = () => {
  return (
    <div className="about">
            <Bounce left cascade>
      <h1 className="text-center  my-5 sub-heading" id="about">ABOUT</h1>
      </Bounce>
      <div className="row mt-4 about-content">
    <Fade left >
          <div className="col-md-6  col-lg-5 card border ">
            <img src="images/Azhagar.png" className="about-side-image "></img>
          </div>
          </Fade>
    <Fade right cascade>
          <div className=" col-md-6 col-lg-7 about-text ">
            <h2>AZHAGAR MATHIYALAGAN</h2>
            <p>
              Hi! I'm <span className="text-primary">Azhagar</span>, a student from Thanthai Hans Roever Arts &
              Science College, and I understand Tanvass is hiring for the Web
              Developer position. With my coding experience and passion for web
              development, I believe that I can be an excellent fit for this
              role. Would you please consider me as an applicant? Thank you very
              much in advance!
            </p>
            <button className="btn btn-info col-12 my-3"> Hire Me!</button>
            <h1 className="text-center my-5">Connect With Me</h1>
            <SocialLinks size={40}/>
          </div>
      </Fade>

      </div>

    </div>
  );
};

export default About;
