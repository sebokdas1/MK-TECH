import React from 'react';
import Advantage from './Advantage';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='top-container'>
                <div> <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/candere_logo/Candere_logo.svg" alt="Logo" /> </div>
                <div><span>BN</span> / EN</div>
            </div>
            <Navbar />
            <div class="hero min-h-screen bg-base-200 mt-2">
                <div class="hero-content hero-container flex-col lg:flex-row-reverse">
                    <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/product_categories/April_2022_v2/pendant.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">DAITY PENDANTS</h1>
                        <p class="py-6">Buy pendants online to get a chance to see all different types of pendants at one place without unnecessary to and fro. These pendants are suitable for various occasions like work wear, daily wear, occasional wear, etc. In terms of designs, you can buy pendants online with these designs like solitaire, double loop, slide, with bail, without bail, etc.</p>

                    </div>
                </div>
            </div>
            <Advantage />
        </div>
    );
};

export default Home;