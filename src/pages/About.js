import React from 'react';
import '../styles/About.css';
import Headshot from '../assets/nina.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function About() {

    const email = () => {
        window.location.href = "mailto:sgarland3449@hotmail.com";
    }

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };


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
            <div className="about-link-container">
                <div className="about-link" onClick={email}>
                    <div className="about-link-image">
                        <EmailIcon />
                    </div>
                    <div className="about-link-text">sgarland3449@hotmail.com</div>
                </div>
                <div className="about-link" onClick={() => openInNewTab('https://www.linkedin.com/in/sarah-garland/')}>
                    <div className="about-link-image">
                        <LinkedInIcon />
                    </div>
                    <div className="about-link-text">Sarah Garland</div>
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