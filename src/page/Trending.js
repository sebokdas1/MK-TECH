import React from 'react';

const Trending = () => {
    return (
        <div className='mt-10 mb-5'>
            <h2 className='text-center text-3xl mb-5'>Featured Products</h2>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/product_categories/April_2022_v2/Bracelet.jpg" class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://cfcdn20.candere.com/skin/frontend/default/new_design_candere/images/product_categories/April_2022_v2/mangalsutra.jpg" class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://www.candere.com/blog/wp-content/uploads/2022/05/3a-365x207.jpg" class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://www.candere.com/blog/wp-content/uploads/2022/04/790x450-blog-banner-08-1-365x207.jpg" class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Trending;