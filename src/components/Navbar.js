import React,{useState} from "react";
import { FaDownload, FaBars } from "react-icons/fa";
import navlinks from "../dataJSON/NavLinks.json";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const handelOpen = () =>{
    setOpen(!open)

  }

  const handleDownload = () => {
    // Define the file URL
    const fileUrl = 'resume/Azhagar M.pdf'; // Replace with your file URL

    // Create a virtual anchor element to trigger the download
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'Azhagar Resume.pdf'; // The default downloaded file name
    anchor.click();
  };

  return (
    <div className="NavBar" id="nav">
      <h1>
        <a>AZHAGAR</a>
      </h1>
      <ul className={open ? "NavLinks active" : "NavLinks"}>
        {navlinks.map((e,index) => {
          return (
            <li key={index}>
              <a href={e.Path}>{e.Name}</a>
            </li>
          );
        })}
        <button className="btn btn-primary d-flex" onClick={handleDownload}>
          <span className="mx-1">Resume</span>
          <FaDownload className="mt-1 ms-1"/>
        </button>
      </ul>
      <div className="bars">
        <FaBars className="bars"  onClick={handelOpen} />
      </div>
    </div>
  );
};

export default Navbar;
