import React from 'react'
import projects from "../dataJSON/Projects.json"
import {Fade,Bounce} from "react-reveal"
const Projects = () => {
  return (
    <div className='projects row' id='projects'>
            <Bounce left cascade>
      <h1 className='text-center sub-heading my-4'>PROJECTS</h1>
      </Bounce>
      <div className=' row justify-content-around  p-3'>
        {projects.map((e, index) => {
          return (
            <Fade>
              <div key={index} className='card  col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-6 justify-content-around project-card'>
                <img src={e.Img} className='card-img-top border' />
                <h4 className='text-center '>{e.Name}</h4>
                <p>{e.Desc}</p>
                <p><b>Used Tools: </b> {e.UsedTools}</p>
                <small><b>Source: </b><a href={e.github} >{e.github}</a></small>
              </div>
            </Fade>
          )

        })}
      </div>
    </div>
  )
}

export default Projects