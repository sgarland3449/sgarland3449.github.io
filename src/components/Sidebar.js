import React, { useState } from 'react';
import '../styles/Sidebar.css'
import { Link } from 'react-router-dom';
import EmailIcon from '../assets/emailIcon.png';

const Sidebar = () => {
    const [activePage, setActivePage] = useState('a');

    const changePage = event => {
        if(event.target.innerHTML === 'WORK') {
            setActivePage(1);
        } else {
            setActivePage(0);
        }
    }

    const email = () => {
        window.location.href = "mailto:sgarland3449@hotmail.com";
    }

  return (
    <div className="sidebar">
        <div className="stuck">
            <div className="name-container">
                <div className="name">SARAH GARLAND</div>
            </div>
            <div className="link-container">
                <Link onClick={changePage} className={activePage ? 'link active' : 'link'} to={"/"}  >WORK</Link>
                <Link onClick={changePage} className={activePage ? 'link' : 'link active'} to={"/about"} >ABOUT</Link>
            </div>
            <div>
                <img  className='email' src={EmailIcon} alt="email icon" onClick={email}/>
            </div>
        </div>
    </div>
  )
}

export default Sidebar