import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import Fade from "react-reveal";
const SocialLinks = ({ size }) => {
  return (
    <Fade left>
      <div className="social-links col-12  row  my-5">
        <a href="https://github.com/azhagarpy" className="col">
          <FaGithub size={size} />
        </a>
        <a
          href="https://www.linkedin.com/in/azhagar-mathiyalagan-2045a7254"
          className="col"
        >
          <FaLinkedin size={size} />
        </a>
        <a href="mailto:azhagarbca@gmail.com" className="col">
          <FaEnvelope size={size} />
        </a>
        <a href="tel:+91 8870956961" className="col">
          <FaPhone size={size} />
        </a>
      </div>
    </Fade>
  );
};

export default SocialLinks;
