import React from 'react';
import { Link } from 'react-router-dom';

const Lunar = () => {
  return (
    <div>
      <div className="">lunar</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default Lunar