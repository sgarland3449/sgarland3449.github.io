import React from 'react';
import { Link } from 'react-router-dom';
import Afterlife from '../assets/covers/afterlife_cover.jpg';
import AfterlifeFiltered from '../assets/covers/afterlife_cover_filter.jpg';
import Blossom from '../assets/covers/blossom_cover.jpg';
import BlossomFiltered from '../assets/covers/blossom_cover_filter.jpg';
import Rexton from '../assets/covers/rexton_cover.jpg';
import RextonFiltered from '../assets/covers/rexton_cover_filter.jpg';
import Lunar from '../assets/covers/lunar_cover.jpg';
import LunarFiltered from '../assets/covers/lunar_cover_filter.jpg';
import Wood from '../assets/covers/wood_cover.jpg';
import WoodFiltered from '../assets/covers/wood_cover_filter.jpg';
import Material from '../assets/covers/material_cover.jpg';
import MaterialFiltered from '../assets/covers/material_cover_filter.jpg';
import Battery from '../assets/covers/battery_cover.jpg';
import BatteryFiltered from '../assets/covers/battery_cover_filter.jpg';
import '../styles/Work.css';

function Work() {
  return (
    <div className="grid-container">
      <div className="grid-item header">
          <div className="header-number">2022</div>
          <div className="header-company">M.Arch Vertical Studio Project</div>
          <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
          <Link className='link' to={`/project/afterlife`}>
            <div className="project-title">Afterlife</div>
          </Link>
            <div className="project-summary"></div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/afterlife`}>
            
            <img className='project-image' 
            onMouseEnter={e => {e.currentTarget.src=Afterlife}}
            onMouseLeave={e => {e.currentTarget.src=AfterlifeFiltered}}
            src={AfterlifeFiltered}
             alt="Drawing of an Afterlife Station" />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">2021</div>
          <div className="header-company">Internship</div>
          <div className="header-subject">Professional</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
          <Link className='link' to={`/project/lunar`}>
            <div className="project-title">Lunar Inn</div>
          </Link>
            <div className="project-summary"></div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/lunar`}>
          <img className='project-image' 
          onMouseEnter={e => {e.currentTarget.src=Lunar}}
          onMouseLeave={e => {e.currentTarget.src=LunarFiltered}}
          src={LunarFiltered} 
          alt="Lunar Inn" />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">2022</div>
          <div className="header-company">M.Arch Seminar Project</div>
          <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
        <div className="project-text">
          <Link className='link' to={`/project/blossom`}>
            <div className="project-title">Blossom</div>
          </Link>
          <div className="project-summary"></div>
        </div>
        <div className="project-image-container">
        <Link to={`/project/blossom`}>
          <img className='project-image' 
          onMouseEnter={e => {e.currentTarget.src=Blossom}}
          onMouseLeave={e => {e.currentTarget.src=BlossomFiltered}}
          src={BlossomFiltered} 
          alt="Blossom." />
        </Link>
        </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">2021</div>
          <div className="header-company">Internship</div>
          <div className="header-subject">Professional</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
          <Link className='link' to={`/project/rexton`}>
            <div className="project-title">Port Rexton House</div>
          </Link>
            <div className="project-summary"></div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/rexton`}>
          <img className='project-image' 
          onMouseEnter={e => {e.currentTarget.src=Rexton}}
          onMouseLeave={e => {e.currentTarget.src=RextonFiltered}}
          src={RextonFiltered} 
          alt="Port Rexton House." />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">2019</div>
          <div className="header-company">Undergraduate Design Studio</div>
          <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
          <Link className='link' to={`/project/woodpavillion`}>
            <div className="project-title">Wooden Textile Pavillion</div>
          </Link>
            <div className="project-summary"></div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/woodpavillion`}>
          <img className='project-image' 
          onMouseEnter={e => {e.currentTarget.src=Wood}}
          onMouseLeave={e => {e.currentTarget.src=WoodFiltered}}
          src={WoodFiltered} 
          alt="Wooden Textile Pavillion" />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
          <div className="header-number">2020</div>
          <div className="header-company">Research Seminar Project</div>
          <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
          <div className="project-text">
          <Link className='link' to={`/project/matlandscapes`}>
            <div className="project-title">Material Landscapes</div>
          </Link>
            <div className="project-summary"></div>
          </div>
          <div className="project-image-container">
          <Link to={`/project/matlandscapes`}>
          <img className='project-image' 
          onMouseEnter={e => {e.currentTarget.src=Material}}
          onMouseLeave={e => {e.currentTarget.src=MaterialFiltered}}
          src={MaterialFiltered} 
          alt="Material Landscapes." />
          </Link>
          </div>
      </div>
      <div className="grid-item header">
        <div className="header-number">2019</div>
        <div className="header-company">Research Seminar Project</div>
        <div className="header-subject">Academic</div>
      </div>
      <div className="grid-item project">
        <div className="project-text">
        <Link className='link' to={`/project/battery`}>
            <div className="project-title">The Battery</div>
          </Link>
          <div className="project-summary"></div>
        </div>
        <div className="project-image-container">
        <Link to={`/project/battery`}>
        <img className='project-image' 
          onMouseEnter={e => {e.currentTarget.src=Battery}}
          onMouseLeave={e => {e.currentTarget.src=BatteryFiltered}}
          src={BatteryFiltered} 
          alt="The Battery Primitive Rug Hooking" />
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Work