import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import img1 from '../../../assets/bannar/bannar01.png'
import img2 from '../../../assets/bannar/bannar02.png'
import img3 from '../../../assets/bannar/bannar03.png'


const TopBanner = () => {
    return (
        <div>
            <Carousel autoPlay={true}
                infiniteLoop={true}
                interval={2000} // 2 seconds
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                stopOnHover={false}
                swipeable={true}
                emulateTouch={true}
            >
                <div>
                    <img src={img1} />

                </div>
                <div>
                    <img src={img2} />

                </div>
                <div>
                    <img src={img3} />

                </div>



            </Carousel>
        </div>
    );
};

export default TopBanner;