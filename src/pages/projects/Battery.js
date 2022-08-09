import React from 'react'
import { Link } from 'react-router-dom'

const Battery = () => {
  return (
    <div>
      <div className="">Battery</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default Battery