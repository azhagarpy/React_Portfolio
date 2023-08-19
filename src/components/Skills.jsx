import React from 'react'
import skllis from "../dataJSON/Skills.json"
import {Bounce} from "react-reveal"

const Skills = () => {
  return (
    <div className='skills' id='skills'>
            <Bounce left cascade>
        <h1 className='text-center my-3 sub-heading'>SKILLS</h1>
        </Bounce>
        <p className='text-center'>I'm From India. i'm doing BCA at Thanthai Hans Roever Arts & Sceince College, Perambalur. I have better knowldge in the following  </p>
        <div className='skill-list row justify-content-around  p-3'>
            {skllis.map((e,index)=>{
                if (index%2==0) {
                    return(
                    <Bounce left>
                        <div key={index} className='card col-xl-2 col-lg-3 col-md-5 col-sm-5 col-xs-6 justify-content-around skill-card'>
                            <img src={e.Img} className='card-img-top' />
                            <h4 className='text-center '>{e.Name}</h4>
                        </div>
                        </Bounce>
                    )
                }
                else{
                    return(
                        <Bounce right>
                            <div key={index} className='card col-xl-2 col-lg-3 col-md-5 col-sm-5 col-xs-6 justify-content-around skill-card'>
                                <img src={e.Img} className='card-img-top' />
                                <h4 className='text-center '>{e.Name}</h4>
                            </div>
                            </Bounce>
                        )  
                }

            })}
        </div>
    </div>
  )
}

export default Skills