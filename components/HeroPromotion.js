import React from 'react';
import style from '@/styles/HeroPromotion.module.css'

function HeroPromotion() {
    return (
        <>
            <div className={`${style.container_width} mx-auto mt-16`}>
                <div className={`${style.hero_promotion} bg-white rounded-3xl flex flex-col lg:flex-row items-center content-center text-black shadow-md w-100 md:w-10/12 mx-auto`}>
                    <div className={`${style.left_side} text-center lg:text-start w-full md:w-1/2`}>
                        <h2 className='font-medium text-2xl md:text-3xl'>Raffle Draw</h2>
                        <p className="my-4 font-semibold">Every <span>Sunday</span>  There is a <span>Raffle Draw</span>,
                            <br /> <span>Guaranteed Winners</span></p>
                        <button className={`${style.pill_btn} rounded-full text-white p-4 px-8 font-semibold`}>Play Now</button>
                    </div>
                    <div className={`${style.right_side} w-full mt-5 lg:mt-0 md:w-1/2`}>
                        <div className='time_box_cover mt-4 md:mt-0 flex flex-row flex-wrap justify-between'>
                            <div className={`${style.time_box} flex flex-col justify-center items-center`}>
                                <span className='flex justify-center content-center p-4 border'>01</span>
                                <p className='mt-3 font-semibold'>Days</p>
                            </div>
                            <div className={`${style.time_box} flex flex-col justify-center  items-center`}>
                                <span>01</span>
                                <p className='mt-3 font-semibold'>Hours</p>
                            </div>
                            <div className={`${style.time_box} flex flex-col justify-center  items-center`}>
                                <span>01</span>
                                <p className='mt-3 font-semibold'>Minutes</p>
                            </div>
                            <div className={`${style.time_box} flex flex-col justify-center  items-center`}>
                                <span>01</span>
                                <p className='mt-3 font-semibold'>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








           
        </>
    )
}

export default HeroPromotion
