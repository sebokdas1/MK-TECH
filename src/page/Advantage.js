import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPaperPlane, faTruck } from '@fortawesome/free-solid-svg-icons';
import './Advantage.css';

const Advantage = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-center text-3xl available'>AVAILABLE FOR EVERYONE</h1>
            <h2 className='text-center font-bold mt-2'>Candere Advantages</h2>
            <div className='empty-div-featured mx-auto mt-2'></div>
            <div className='advantage-content mt-4'>
                <div className='advantage-second-container'>
                    <div>
                        <p className='font-icons shadow-lg'> <FontAwesomeIcon icon={faBullhorn} /></p>
                        <p className='mt-4 font-bold'>Discount Announcement</p>
                        <button className=''>Get Discount</button>
                    </div>
                    <div>
                        <p className='font-icons shadow-lg'> <FontAwesomeIcon icon={faPaperPlane} /></p>
                        <p className='mt-4 font-bold'>Direct Messages</p>
                        <button className=''>Chat</button>
                    </div>
                    <div>
                        <p className='font-icons shadow-lg'> <FontAwesomeIcon icon={faTruck} /></p>
                        <p className='mt-4 font-bold'>Tracking Order Delevery</p>
                        <button className=''>Track Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;