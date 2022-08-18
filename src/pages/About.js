import React from 'react';
import '../styles/About.css';
import Headshot from '../assets/sarah.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from 'react-router-dom';

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
                    <strong>SARAH GARLAND</strong><br /> is a Master of Architecture student at the University of British Columbia
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
                    <li>
                        <Link className='link' to={`/project/afterlife`}>
                            <div className="featured-link"><ChevronRightOutlinedIcon />Afterlife</div>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to={`/project/lunar`}>
                            <div className="featured-link"><ChevronRightOutlinedIcon />Lunar Inn</div>
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to={`/project/blossom`}>
                            <div className="featured-link"><ChevronRightOutlinedIcon />Blossom</div>
                        </Link>
                    </li>
                </ul>
            </div>
            <hr />
            <div className="honours">
                <div className="honours-title"><strong>HONOURS / AWARDS</strong></div>
                <ul className="honours-list">
                    <li>NSERC Undergraduate Student Research Award 2020</li>
                    <li>NECA Green Energy Challenge Second Place (CECA UofT) 2020</li>
                    <li>University of Toronto Dean’s List Scholar 2017/18/19/20</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default About