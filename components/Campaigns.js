import React from 'react';
import Image from 'next/image'
import style from '@/styles/Compaigns.module.css'

function Campaigns() {
    return (
        <>


            <div className={`${style.container_width} mx-auto my-8`}>
                <h2 className='text-4xl font-bold my-5 text-center'>Campaigns Ending Soon</h2>
                <div className="flex flex-wrap my-10 -mx-4">
                    <div className="mt-7 w-full md:w-1/2 lg:w-1/4 px-4">
                        <div className="bg-white rounded-lg shadow-md text-center p-3">
                            <div style={{ position: "relative", height: "180px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <span className="absolute top-0 left-0 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "50px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                    <p className='font-semibold text-sm'>25/</p>
                                    <p className='-mt-1 text-xs'>Sold</p>
                                </span>
                                <span className="absolute top-1 left-10 rounded-full sold z-10 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "45px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                    <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                    <p className='font-semibold text-sm'>45</p>
                                </span>
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                            <div className="flex flex-row flex-wrap justify-between items-center">
                                <div style={{ position: "relative", height: "30px", width: "30px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Win.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <span className={`${style.badge} bg-red-300 p-1 px-2 text-xs text-red-600`}>Ends Today</span>
                            </div>
                            <h3 className='text-start my-3 text-xl text-black opacity-80 font-bold'>Apple macbook pro m2</h3>
                            <p className="text-black price text-2xl font-bold">$65.35</p>
                            <button className={`${style.pill_btn} w-full p-3 font-bold mt-5 `}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="mt-7 w-full md:w-1/2 lg:w-1/4 px-4">
                        <div className="bg-white rounded-lg shadow-md text-center p-3">
                            <div style={{ position: "relative", height: "180px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <span className="absolute top-0 left-0 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "50px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                    <p className='font-semibold text-sm'>25/</p>
                                    <p className='-mt-1 text-xs'>Sold</p>
                                </span>
                                <span className="absolute top-1 left-10 rounded-full sold z-10 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "45px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                    <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                    <p className='font-semibold text-sm'>45</p>
                                </span>
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                            <div className="flex flex-row flex-wrap justify-between items-center">
                                <div style={{ position: "relative", height: "30px", width: "30px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Win.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <span className={`${style.badge} bg-red-300 p-1 px-2 text-xs text-red-600`}>Ends Today</span>
                            </div>
                            <h3 className='text-start my-3 text-xl text-black opacity-80 font-bold'>Apple macbook pro m2</h3>
                            <p className="text-black price text-2xl font-bold">$65.35</p>
                            <button className={`${style.pill_btn} w-full p-3 font-bold mt-5 `}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="mt-7 w-full md:w-1/2 lg:w-1/4 px-4">
                        <div className="bg-white rounded-lg shadow-md text-center p-3">
                            <div style={{ position: "relative", height: "180px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <span className="absolute top-0 left-0 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "50px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                    <p className='font-semibold text-sm'>25/</p>
                                    <p className='-mt-1 text-xs'>Sold</p>
                                </span>
                                <span className="absolute top-1 left-10 rounded-full sold z-10 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "45px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                    <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                    <p className='font-semibold text-sm'>45</p>
                                </span>
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                            <div className="flex flex-row flex-wrap justify-between items-center">
                                <div style={{ position: "relative", height: "30px", width: "30px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Win.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <span className={`${style.badge} bg-red-300 p-1 px-2 text-xs text-red-600`}>Ends Today</span>
                            </div>
                            <h3 className='text-start my-3 text-xl text-black opacity-80 font-bold'>Apple macbook pro m2</h3>
                            <p className="text-black price text-2xl font-bold">$65.35</p>
                            <button className={`${style.pill_btn} w-full p-3 font-bold mt-5 `}>Add to Cart</button>
                        </div>
                    </div>
                    <div className="mt-7 w-full md:w-1/2 lg:w-1/4 px-4">
                        <div className="bg-white rounded-lg shadow-md text-center p-3">
                            <div style={{ position: "relative", height: "180px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <span className="absolute top-0 left-0 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "50px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                    <p className='font-semibold text-sm'>25/</p>
                                    <p className='-mt-1 text-xs'>Sold</p>
                                </span>
                                <span className="absolute top-1 left-10 rounded-full sold z-10 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "45px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                    <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                    <p className='font-semibold text-sm'>45</p>
                                </span>
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                            <div className="flex flex-row flex-wrap justify-between items-center">
                                <div style={{ position: "relative", height: "30px", width: "30px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Win.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <span className={`${style.badge} bg-red-300 p-1 px-2 text-xs text-red-600`}>Ends Today</span>
                            </div>
                            <h3 className='text-start my-3 text-xl text-black opacity-80 font-bold'>Apple macbook pro m2</h3>
                            <p className="text-black price text-2xl font-bold">$65.35</p>
                            <button className={`${style.pill_btn} w-full p-3 font-bold mt-5 `}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Campaigns
