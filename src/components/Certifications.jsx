import React from 'react'
import { Bounce, Fade } from "react-reveal"
import certifications from "../dataJSON/Certifications.json"

const Certifications = () => {
    return (
        <div className='certifications my-5' id='certifications'>
            <Bounce left cascade>
                <h1 className='text-center sub-heading my-4'>CERTIFICATIONS</h1>
                <div className='row justify-content-around  p-3'>
                    {certifications.map((e, index) => {
                        return (
                            <Fade>
                                <div key={index} className='card col-xl-3 col-lg-3 col-md-5 col-sm-5 col-xs-6 justify-content-around certificate-card'>
                                    <img src={e.Img} className='card-img-top border' />
                                    <h4 className='text-center '>{e.Name}</h4>
                                    <p><b>Organization : </b> {e.In}</p>
                                    <small><b>Date : </b>{e.Date}</small>
                                </div>
                            </Fade>
                        )
                    })}
                </div>
            </Bounce>
        </div>
    )
}

export default Certifications