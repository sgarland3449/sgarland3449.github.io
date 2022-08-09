import React from 'react'
import { Outlet } from 'react-router-dom';
import '../styles/Project.css'

const Project = () => {
  return (
    <div className='project-container'>
     <Outlet /> 
    </div>
  )
}

export default Project