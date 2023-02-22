import React from 'react'
import Image from 'next/image'
import style from '@/styles/HowToPlay.module.css'


function HowToPlay() {
    return (
        <>
            <section className={`${style.how_to_play} py-10`}>
                <div className={`${style.container_width} mx-auto`}>
                    <h2 className='text-4xl font-bold text-gray-800 mx-auto text-center'>How to Play</h2>


                    <div className="flex flex-wrap -mx-4">
                        <div className={`${style.stepbox_outer} my-11 pt-14 w-full md:w-1/4 px-4`}>
                            <div className={`${style.step_cover} flex flex-col flex-wrap items-center text-center`}>
                                <div style={{ position: "relative", height: "60px", width: "100px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Purchase Ticket.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <span className='relative step_number rounded-md my-6 h-11 w-11 border border-sky-500 flex items-center justify-center text-md font-bold'>01</span>
                                <h3 className="purchase_tickets text-xl mb-3 ">
                                    Purchase <span className='text-emerald-300 font-bold'>Ticket</span>
                                </h3>
                                <p>Purchase one or more raffle tickets to enter the competition.</p>
                            </div>
                        </div>
                        <div className={`${style.stepbox_outer} my-11 pt-6 w-full md:w-1/4 px-4`}>
                            <div className={`${style.step_cover} flex flex-col flex-wrap items-center text-center`}>
                                <h3 className="purchase_tickets text-xl mb-3 ">
                                    Purchase <span className='text-emerald-300 font-bold'>Ticket</span>
                                </h3>
                                <p>Purchase one or more raffle tickets to enter the competition.</p>
                                <span className='step_number rounded-md my-6 h-11 w-11 border border-sky-500 flex items-center justify-center text-md font-bold'>02</span>
                                <div style={{ position: "relative", height: "60px", width: "100px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Wait for Sunday.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${style.stepbox_outer} my-11 pt-14 w-full md:w-1/4 px-4`}>
                            <div className={`${style.step_cover} flex flex-col flex-wrap items-center text-center`}>
                                <div style={{ position: "relative", height: "60px", width: "100px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Check the Results.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                                <span className='step_number rounded-md my-6 h-11 w-11 border border-sky-500 flex items-center justify-center text-md font-bold'>03</span>
                                <h3 className="purchase_tickets text-xl mb-3 ">
                                    Purchase <span className='text-emerald-300 font-bold'>Ticket</span>
                                </h3>
                                <p>Purchase one or more raffle tickets to enter the competition.</p>
                            </div>
                        </div>
                        <div className={`${style.stepbox_outer} my-11 pt-6 w-full md:w-1/4 px-4`}>
                            <div className={`${style.step_cover} flex flex-col flex-wrap items-center text-center`}>
                                <h3 className="purchase_tickets text-xl mb-3 ">
                                    Purchase <span className='text-emerald-300 font-bold'>Ticket</span>
                                </h3>
                                <p>Purchase one or more raffle tickets to enter the competition.</p>
                                <span className='step_number rounded-md my-6 h-11 w-11 border border-sky-500 flex items-center justify-center text-md font-bold'>04</span>
                                <div style={{ position: "relative", height: "60px", width: "100px" }}>
                                    <Image
                                        style={{ transform: "scale(0.9)" }}
                                        src="/images/Claim Your Prize.svg"
                                        alt="Picture of the author"
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowToPlay
