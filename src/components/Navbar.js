import React,{useState} from "react";
import { FaDownload, FaBars } from "react-icons/fa";
import navlinks from "../dataJSON/NavLinks.json";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const handelOpen = () =>{
    setOpen(!open)

  }
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
        <button className="btn btn-primary d-flex">
          <span className="mx-1">Resume</span>
          <FaDownload/>
        </button>
      </ul>
      <div className="bars">
        <FaBars className="bars"  onClick={handelOpen} />
      </div>
    </div>
  );
};

export default Navbar;
