import React from "react";
import Fade from "react-reveal/Fade"
import SocialLinks from "./SocialLinks";




const Home = () => {
  return (
    <>
      <div className="row homepage-content ">
        <Fade left cascade>
        <div className="col-md-7  homepage-text ">
          <h1 className="my-3">AZHAGAR MATHIYALAGAN</h1>
          <h4 className="my-3">FULLSTACK WEB DEVELOPER</h4>
          <p className="my-3">
            i'm Azhagar. i'm a full-stack web developer.i develope full-stack
            web applications using react and django.
          </p>
          <div>
          <button className="btn btn-success col-md-4 col-xs-5 col-sm-5">Know More</button>
          <button className="btn btn-info col-md-4 offset-1 col-sm-5">Hire Me!</button>
          </div>
          <SocialLinks size={50}/>
        </div>
        </Fade>
        <Fade right cascade>
        <div className="col-md-5  profile-image ">
          <div className="big-circle">
            <img src="images/Azhagar.png" className="profile-photo" />
          </div>
          <div className="small-circle"></div>
          <div className="medium-circle"></div>
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
