import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Sidebar } from './sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';
import image from './logo.png';
function Navbar() {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: 'black' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <h2 className="Dashboard">Dashboard</h2>
                    <div class="search">
                        {/* <input type="text" placeholder="Search Here" />
                        <button>SEARCH</button> */}
                        <Link to="#" className='nav-profile'>
                            <FaIcons.FaUserAlt />
                        </Link>
                        {/* <h3 className="username">Welcome, User</h3> */}
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className="navbar-toggle" onClick={showSidebar}>
                            <img className="logo-image" src={image} />
                        </li>
                        {Sidebar.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icons}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;