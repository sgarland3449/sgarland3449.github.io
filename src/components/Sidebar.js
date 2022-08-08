import React from 'react';
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="name-container">
            <div className="name">Sarah Garland</div>
        </div>
        <div className="link-container">
            <Link to={"/"}>Work</Link>
            <Link to={"/about"}>About</Link>
        </div>
        <div className="email">
            <a href="mailto:sgarland3449@hotmail.com">email</a>
        </div>
    </div>
  )
}

export default Sidebar