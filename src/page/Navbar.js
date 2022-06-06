import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='mt-4 nav-container'>
            <ul className='nav-menu'>
                <li className='home'>HOME</li>
                <li>ADVERTISERS</li>
                <li>PUBLISHERS</li>
                <li>INFLUENCERS</li>
                <li>AD FORMATS</li>
                <li>BLOG</li>
                <li>CONTACT US</li>
            </ul>
            <button class=" login-btn shadow"><span className='btn-content'><span className='login'>LOGIN</span> <span className='signup'>SIGN UP</span></span></button>
        </div>
    );
};

export default Navbar;