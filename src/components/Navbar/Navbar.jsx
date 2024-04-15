import React, { useState } from 'react';
import './navbar.css';

// icons import
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className='navbar'>
        <div className='main_container h-100'>
            <div className='navbar_content h-100'>
                <div className='navbar_content_left'>
                    <h3>Mosaic</h3>
                </div>
                <div className='navbar_content_right'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Services</li>
                        <li>Team</li>
                    </ul>
                </div>
                <div className='navbar_mobile' onClick={() => {
                    setToggleNav(!toggleNav)
                }}>
                    <span><RxHamburgerMenu/></span>
                    <p>MENU</p>
                </div>
                <div className='navbar_hidden_menus' style={{top: toggleNav ? '60px' : '-100vh'}}>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Project</h3>
                    <h3>Services</h3>
                    <h3>Team</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar