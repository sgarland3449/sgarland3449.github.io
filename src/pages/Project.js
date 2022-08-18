import React, { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom';
import '../styles/Project.css';
import works from "../works/works.json";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const Project = () => {
  let { id } = useParams();
  const proj = works[id];
  const projectContainer = useRef(null);
  const summaryContainer = useRef(null);

  useEffect(() => {
    projectContainer.current.scrollTo(0, 0);
    summaryContainer.current.scrollTo(0, 0);
},[id]);

  return (
    <div className='project-container' ref={projectContainer}>
      <div className="header">
        <div className="header-number"></div>
        <div className="header-company">{proj.company}</div>
        <div className="header-subject">{proj.subject}</div>
      </div>
      <div className="details-container">
        <div className="title-box">
          <div className="title-title">{proj.projectTitle}</div>
          <div className="title-date">{proj.date}</div>
          <div className="title-awards">
            <ul>
              {proj.awards.map((award) => {
                return (
                <li key={award}>{award}</li>
              )})}
            </ul> 
          </div>
          <div className="title-people">
            <ul>
              {proj.people.map((person) => {
                return (
                <li key={person.title + person.name}><span className='title-people-bold'>{person.title}:</span> {person.name}</li>
              )})}
            </ul> 
          </div>
        </div>
        <div className="summary-box" ref={summaryContainer}>
          {proj.summary}
        </div>
      </div>
      <div className="works-container">
        <ul>
            {proj.images.map((image) => {
              return (
              <li key={image.url}>
                <div className="works-img">
                  <img src={require(`../assets/${proj.project}/${image.url}`)} alt={image.title} />
                </div>
                <div className="works-title">
                  {image.title}
                </div>
              </li>
            )})}
        </ul>
      </div>
      <div className="buttons-container">
        <div className="back-button">
          <Link className='navLink' to={`/project/${proj.previousProject.routeName}`}>
            <div className='nav'><ChevronLeftOutlinedIcon /> {proj.previousProject.title}</div>
          </Link>
        </div>
        <div className="next-button">
          <Link className='navLink' to={`/project/${proj.nextProject.routeName}`}>
            <div className='nav'>{proj.nextProject.title} <ChevronRightOutlinedIcon /></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project