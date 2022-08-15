import React, { useEffect, useState } from 'react';
import '../styles/Sidebar.css'
import { Link, useLocation } from 'react-router-dom';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


const Sidebar = () => {
    const [activePage, setActivePage] = useState('');
    let location = useLocation();

    useEffect(() => {
        if(location.pathname === '/about'){
            setActivePage(0)
        } else {
            setActivePage(1)
        }
    }, [location]);

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
                <Link className={activePage ? 'link active' : 'link'} to={"/"}  >WORK</Link>
                <Link className={activePage ? 'link' : 'link active'} to={"/about"} >ABOUT</Link>
            </div>
            <div className='email'>
                <MailOutlinedIcon onClick={email} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar