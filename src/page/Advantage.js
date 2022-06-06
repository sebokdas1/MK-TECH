import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPaperPlane, faTruck } from '@fortawesome/free-solid-svg-icons';
import './Advantage.css';

const Advantage = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-center font-bold'>Candere Advantages</h2>
            <div className='empty-div-featured mx-auto mt-2'></div>
            <div className='advantage-content mt-4'>
                <div className='advantage-second-container'>
                    <div>
                        <p className='font-icons shadow-lg'> <FontAwesomeIcon icon={faBullhorn} /></p>
                        <p className='mt-4'>Discount Announcement</p>
                        <button>Get Discount</button>
                    </div>
                    <div>
                        <p className='font-icons shadow-lg'> <FontAwesomeIcon icon={faPaperPlane} /></p>
                        <p className='mt-4'>Direct Messages</p>
                        <button>Chat</button>
                    </div>
                    <div>
                        <p className='font-icons shadow-lg'> <FontAwesomeIcon icon={faTruck} /></p>
                        <p className='mt-4'>Tracking Order Delevery</p>
                        <button>Track Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;