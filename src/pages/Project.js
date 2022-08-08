import React from 'react'
import { Outlet } from 'react-router-dom';

const Project = () => {
  return (
    <div className='project-container'>
     Project
     <Outlet /> 
    </div>
  )
}

export default Project