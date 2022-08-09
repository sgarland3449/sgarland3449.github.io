import React from 'react';
import '../styles/About.css';
import Headshot from '../assets/nina.jpg';
import Email from '../assets/emailIcon.png';
import Linkedin from '../assets/linkedinIcon.png';

function About() {
  return (
    <div className='about-container'>
        <div className="container-1">
            <img src={Headshot} alt="Sarah Garland" />
        </div>
        <div className="container-2">
            <hr />
            <div className="about-text">
                <span>
                    <strong>SARAH GARLAND</strong> is a Master's Student at the University of British Columbia
                </span>
            </div>
            <hr />
            <div className="link-container">
                <div className="link">
                    <div className="link-image">
                        <img src={Email} alt="email icon" />
                    </div>
                    <div className="link-text">sgarland3449@hotmail.com</div>
                </div>
                <div className="link">
                    <div className="link-image">
                        <img src={Linkedin} alt="linkedin icon" />
                    </div>
                    <div className="link-text">Sarah Garland</div>
                </div>
            </div>
        </div>
        <div className="container-3">
            <hr />
            <div className="featured">
                <div className="featured-title"><strong>FEATURED</strong></div>
                <ul>
                    <li>UBC Project 1: Afterlife lorem ipsum blablabla blablabla</li>
                    <li>UBC Project 2: Blossom</li>
                    <li>UBC Project 3: Battery</li>
                </ul>
            </div>
            <hr />
            <div className="honours">
                <div className="honours-title"><strong>HONOURS / AWARDS</strong></div>
                <ul className="honours-list">
                    <li>Bibo</li>
                    <li>Eggy</li>
                    <li>Schmonkey</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default About