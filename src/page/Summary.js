import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div className='mt-5 summary-container'>
            <h2 className='text-3xl text-center font-bold mb-12 pt-8 summary'>Summary</h2>
            <div className='advantage-content mt-12'>
                <div className='advantage-second-container'>
                    <div>
                        <p className='summary-text summary-text1 text-center shadow-lg'>1 BN+<br /><span className='text-sm'>Daily Impressions</span></p>


                    </div>
                    <div>
                        <p className='summary-text text-center summary-text2 shadow-lg'> $500k+<br /><span className='text-md'>Paid</span></p>


                    </div>
                    <div>
                        <p className='summary-text text-center summary-text3 shadow-lg'> 8k+<br /><span className='text-sm'>Global Publishers</span></p>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;