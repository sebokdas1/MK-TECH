import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="mt-3 ad-container">
                <img src="https://webapi.robi.com.bd/uploads/2021/05/46a6bc03-0082-46a8-9295-bfcf1dc5b583.png" alt="" />
                <div class="card-body">
                    <h2 class="text-center font-bold">Robi axita Limited</h2>
                    <p className='text-center'>5000mb, 570sms and 100000min talktime only 5000tk</p>
                    <p className='text-green-500 mt-12 cursor-pointer ml-5'>Learn more</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;