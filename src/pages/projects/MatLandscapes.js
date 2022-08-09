import React from 'react';
import { Link } from 'react-router-dom';

const MatLandscapes = () => {
  return (
    <div>
      <div className="">mat land</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default MatLandscapes