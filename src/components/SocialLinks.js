import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import Fade from "react-reveal";
const SocialLinks = ({size}) => {
  return (
    <Fade left>
      <div className="social-links col-6  row  my-5">
        <FaGithub className="col" size={size} />
        <FaLinkedin className="col" size={size} />
        <FaEnvelope className="col" size={size} />
        <FaPhone className="col" size={size} />
      </div>
    </Fade>
  );
};

export default SocialLinks;
