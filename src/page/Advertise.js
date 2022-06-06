import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Advertise.css'

const Advertise = () => {
    return (
        <div className='mt-7'>
            <h2 className='text-3xl ad text-center'>VERSATILE AD FORMATS</h2>
            <div className='mt-5'>
                <ul className='ad-nav'>
                    <li className='shadow'><Link to="/">POP-UNDER</Link></li>
                    <li className='shadow'><Link to="/banner">BANNER AD</Link></li>
                    <li className='shadow'><Link to="/native">NATIVE</Link></li>
                    <li className='shadow'><Link to="/skim">SKIM</Link></li>
                </ul>
            </div>
            <Outlet />
        </div>
    );
};

export default Advertise;