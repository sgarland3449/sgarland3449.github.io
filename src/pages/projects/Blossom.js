import React from 'react';
import { Link } from 'react-router-dom';

const Blossom = () => {
  return (
    <div>
      <div className="">blossom</div>
      <Link className='link' to={`/`}>
        <div className="project-title">Back</div>
      </Link>
    </div>
  )
}

export default Blossom