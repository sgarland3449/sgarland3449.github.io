import React from 'react';
import { Link } from 'react-router-dom';

const WoodPavillion = () => {
  return (
    <div>
      <div className="">wood pavillion</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default WoodPavillion