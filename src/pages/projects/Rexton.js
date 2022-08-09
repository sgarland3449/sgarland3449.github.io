import React from 'react';
import { Link } from 'react-router-dom';

const Rexton = () => {
  return (
    <div>
      <div className="">rexton</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default Rexton