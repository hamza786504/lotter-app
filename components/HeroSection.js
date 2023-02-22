import React from 'react';

import Image from 'next/image'
import Slider from "react-slick";
import HeroPromotion from '@/components/HeroPromotion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from '@/styles/HeroSection.module.css'





const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000
  };
  
  const slides = [
    1, 2, 3
  ];

  
function HeroSection() {
  return (
    <>
      



      <div className={`${style.hero_section} w-full`}>
        <div className={`${style.container_width} mx-auto`}>


          <Slider {...settings}>
            {slides.map((slide) => (
              <>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className={`${style.left_side} w-100 md:w-5/12 py-3 text-start`}>
                    <h1 className="font-bold leading-snug text-white">
                      Guaranteed Wins
                      £10M+ Prizes Given Out
                      Pursuit Your Dream
                    </h1>
                    <p className='text-md leading-normal text-white my-5'>If you take even a few minutes to consider exactly how long a meeting should take, you could save critical time on the day of millions of years are being intentional the appointment.</p>
                    <button className={`${style.pill_btn} rounded-full bg-white p-4 px-8 font-semibold`}> Start Playing</button>
                  </div>
                  <div className={`w-100 md:w-1/2 py-3 text-center`}>
                    <div width="100%" height="100%" style={{ position: "relative", height: "558px", width: "100%" }}>
                      <Image
                        src="images/hero_image.svg"
                        alt="Picture of the author"
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Slider>
          <HeroPromotion />

        </div>
      </div>


    </>
  )
}

export default HeroSection
