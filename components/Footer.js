import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import style from '@/styles/Footer.module.css'

import { CiLocationOn } from "react-icons/ci"
import { TbPhoneCall } from "react-icons/tb"
import { AiOutlineMail } from "react-icons/ai"

function Footer() {
    return (
        <>
            <footer className={`${style.footer} bg-white`}>
                <div className={`${style.container_width} mx-auto py-8`}>
                    <div className="flex flex-wrap justify-between -mx-4">
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h3 className="text-5xl text-gray-700 font-bold mb-4">LOGO</h3>
                            <div width="100%" height="100%" style={{ position: "relative", height: "80px", margin: "0", width: "100%", maxWidth: "300px" }}>
                                <Image
                                    src="images/card.svg"
                                    layout='fill'
                                    alt='icon'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Campaigns</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Why Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Blog</a>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Company</h3>
                            <ul>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">My Account</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Sitemap</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Winners</a>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/6 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Blog</h3>
                            <ul>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Titles of Latest Blogs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">High Frequency Compute</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Bare Metal</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-dark font-normal text-md">Object Storage</a>
                                    </Link>
                                </li>
                            </ul>

                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                            <h3 className="text-xl font-bold mb-4">Contact us</h3>
                            <div className={`${style.contact_details}`}>
                                <ul>
                                    <li>
                                        <Link href="/" legacyBehavior>
                                            <a className="text-dark font-normal flex flex-row items-center justify-start text-md">
                                                <div className={`${style.icon_cover}`}>
                                                    <CiLocationOn />
                                                </div>
                                                <p className='ml-3 mb-0'>1029 Finchley Road, London, NW117ES</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" legacyBehavior>
                                            <a className="text-dark font-normal flex flex-row items-center justify-start text-md">
                                                <div className={`${style.icon_cover}`}>
                                                    <TbPhoneCall />
                                                </div>
                                                <p className='ml-3 mb-0'>hello@prizepursuit.com</p>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" legacyBehavior>
                                            <a className="text-dark font-normal flex flex-row items-center justify-start text-md">
                                                <div className={`${style.icon_cover}`}>
                                                    <AiOutlineMail />
                                                </div>
                                                <p className='ml-3 mb-0'>020 8050 0018</p>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="w-full lg:1/3 px-4">
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/2 px-4">
                            <p className="text-center text-gray-700">© 2023 Prize Pursuit, All Rights Reserved.</p>
                        </div>
                        <div className="w-full mt-3 sm:mt-0 sm:w-1/2 md:w-1/3 flex flew-row justify-between text-center px-4">
                            <Link href="/" legacyBehavior>
                                <a className="text-dark font-normal flex flex-row items-center justify-start text-md">
                                    Terms & Conditions
                                </a>
                            </Link>
                            <Link href="/" legacyBehavior>
                                <a className="text-dark font-normal flex flex-row items-center justify-start text-md">
                                    Privacy policy
                                </a>
                            </Link>
                        </div>
                    </div>
                </div >
            </footer >
        </>
    )
}

export default Footer
