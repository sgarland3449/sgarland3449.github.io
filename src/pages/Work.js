import React from 'react';
import { Link } from 'react-router-dom';
import AfterlifeSpeculations from '../assets/afterlife_what_if_speculations.jpeg';
import SpeculativeDrawing from '../assets/speculative_drawing.jpeg';
import '../styles/Work.css';

function Work() {



  return (
    <div className='home-container'>
      <div className="grid-container">
        <div className="grid-item header">
          <div className="header-number">01</div>
          <div className="header-company">M.Arch Class Project</div>
          <div className="header-subject">Academic</div>
        </div>
        <div className="grid-item project">
          <div className="project-text">
            <div className="project-title">Afterlife</div>
            <div className="project-summary">I did this project for a class.</div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/afterlife`}>
            <img className='project-image' src={AfterlifeSpeculations} alt="Drawing of an Afterlife Station" />
          </Link>
          </div>
        </div>
        <div className="grid-item header">
          <div className="header-number">02</div>
          <div className="header-company">M.Arch Class Project</div>
          <div className="header-subject">Academic</div>
        </div>
        <div className="grid-item project">
          <div className="project-text">
            <div className="project-title">Speculative Drawing</div>
            <div className="project-summary">I did this project for a class.</div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/speculative`}>
            <img className='project-image' src={SpeculativeDrawing} alt="Drawing of an Afterlife Station" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work