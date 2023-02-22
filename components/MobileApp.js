import React from 'react'
import Image from 'next/image'
import style from '@/styles/MobileApp.module.css'

function MobileApp() {
    return (
        <>
            <div className="w-full flex flex-col md:flex-row">
                <div className={`${style.color_blue} w-full md:w-1/2 p-7 py-11 flex justify-center flex-col items-center`}>
                    <h3 style={{ maxWidth: "400px" }} className='font-semibold text-3xl md:text-4xl text-center text-white'>Says hello to our latest mobile app</h3>
                    <div className="mobile_app_images flex flex-row">
                        <div class="mt-11" style={{ position: "relative", height: "60px", width: "150px" }}>
                            <Image
                                src="/images/apple store.svg"
                                alt="Picture of the author"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div class="mt-11 ml-0 sm:ml-5" style={{ position: "relative", height: "60px", width: "150px" }}>
                            <Image
                                src="/images/play store.svg"
                                alt="Picture of the author"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                </div>
                <div className={`${style.color_orange} w-full flex-col md:w-1/2 p-7 py-11 flex justify-center items-center`}>
                    <h3 style={{ maxWidth: "400px" }} className='font-semibold text-3xl md:text-4xl text-center text-white'>Says hello to our latest mobile app</h3>
                    <button className='mt-11 border border-white p-4 px-8 text-white rounded-xl'>See Details</button>
                </div>
            </div>
        </>
    )
}

export default MobileApp
