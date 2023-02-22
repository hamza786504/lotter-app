import React from 'react'
import Image from 'next/image'
import style from '@/styles/WhyUs.module.css'

function WhyUs() {
    return (
        <>
            <div className={`${style.container_width} mx-auto my-8`}>
                <h2 className="text-2xl md:text-4xl text-center font-semibold mb-4">Why Choose Us?</h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4">
                        <div className="text-center p-6">
                            <div width="100%" height="100%" style={{ position: "relative",height: "60px", margin: "0 auto", width: "60px" }}>
                                <Image
                                    src="images/Limited Tickets.svg"
                                    layout='fill'
                                    alt='icon'
                                    objectFit='contain'
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Limited Tickets</h3>
                            <p className="text-gray-700">We limit the number of tickets, ensuring high chances of winning and making our raffle an attractive choice for customers. By limiting the number of tickets, you increase the odds of each ticket winning.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div className="text-center p-6">
                            <div width="100%" height="100%" style={{ position: "relative",height: "60px", margin: "0 auto", width: "60px" }}>
                                <Image
                                    src="images/Support Good Cause.svg"
                                    layout='fill'
                                    alt='icon'
                                    objectFit='contain'
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Support Good Cause</h3>
                            <p className="text-gray-700">We have pledged 10% of the profits to a charity. Which our customers choose in a monthly poll.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div className="text-center p-6">
                            <div width="100%" height="100%" style={{ position: "relative",height: "60px", margin: "0 auto", width: "60px" }}>
                                <Image
                                    src="images/Biggest Lottery Jackpot.svg"
                                    layout='fill'
                                    alt='icon'
                                    objectFit='contain'
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-2">Biggest Lottery Jackpot</h3>
                            <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing an type setting industry. Lorem Ipsum has been the industry known printer took & scrambled it make.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs;
