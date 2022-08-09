import React from 'react';
import { Link } from 'react-router-dom';
import AfterlifeSpeculations from '../assets/afterlife_what_if_speculations.jpeg';
import SpeculativeDrawing from '../assets/speculative_drawing.jpeg';
import Rexton from '../assets/rexton_placeholder.jpg';
import Lunar from '../assets/lunar_placeholder.jpg';
import Wood from '../assets/wood_placeholder.jpg';
import Matrix from '../assets/materials_matrix.jpeg';
import Battery from '../assets/battery_placeholder.jpg';
import '../styles/Work.css';

function Work() {



  return (
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
          <div className="project-title">Blossom</div>
          <div className="project-summary">I did this project for a class.</div>
        </div>
        <div className="project-image-container">
        <Link to={`/project/blossom`}>
          <img className='project-image' src={SpeculativeDrawing} alt="Drawing of a park." />
        </Link>
        </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">03</div>
          <div className="header-company">Woodford Architecture</div>
          <div className="header-subject">Professional</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
            <div className="project-title">Lunar Inn Renovation</div>
            <div className="project-summary">Ground floor interventions, reception area upgrades, and a gallery.</div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/lunar`}>
            <img className='project-image' src={Lunar} alt="Render of a Lunar reception area." />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">04</div>
          <div className="header-company">B.Arch Class Project</div>
          <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
            <div className="project-title">Wooden Textile Pavillion</div>
            <div className="project-summary">I did this project for a studio class.</div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/woodpavillion`}>
            <img className='project-image' src={Wood} alt="Wooden Sculpture in hands" />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">05</div>
          <div className="header-company">Woodford Architecture</div>
          <div className="header-subject">Professional</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
            <div className="project-title">Port Rexton House</div>
            <div className="project-summary">Early concept renderings for two couples looking to build a summer home in Port Rexton, Newfoundland.</div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/rexton`}>
            <img className='project-image' src={Rexton} alt="Rendering of a summer home." />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">06</div>
          <div className="header-company">B.Arch Class Project</div>
          <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
            <div className="project-title">Material Landscapes: Human Ecological Interactions</div>
            <div className="project-summary">I did this project for a class.</div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/matlandscapes`}>
            <img className='project-image' src={Matrix} alt="Matrix of earthy materials." />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
        <div className="header-number">07</div>
        <div className="header-company">B.Arch Class Project</div>
        <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
        <div className="project-text">
          <div className="project-title">The Battery: Primitive Rug Hooking</div>
          <div className="project-summary">I did this project for a class.</div>
        </div>
        <div className="project-image-container">
        <Link to={`/project/battery`}>
          <img className='project-image' src={Battery} alt="Picture of rug depicting The Battery, Newfoundland." />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Work