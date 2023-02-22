import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import style from '@/styles/LiveCompaigns.module.css'
import { BsHeart, BsShare } from "react-icons/bs";

function LiveCompaign() {
    return (
        <>
            <div className="live_compaign my-11 pt-5">
                <div className={`${style.container_width} mx-auto`}>
                    <h2 className='text-4xl font-bold text-gray-800 mx-auto text-center pb-11'>Live Compaigns</h2>
                    <div className={`${style.shadow_class} relative mt-6 w-full flex flex-row items-stretch bg-white rounded-lg p-3`}>
                        <div className="w-full md:w-1/4">
                            <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <Image
                                    style={{ transform: "scale(1)" }}
                                    src="/images/Guaranteed.svg"
                                    alt="Picture of the author"
                                    height={50}
                                    width={60}
                                    objectFit='contain'
                                />
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 p-4">
                            <h3 className="text-3xl font-semibold mx-0 md:mx-4 my-4">Apple macbook pro m2</h3>
                            <div className="mx-0 md:mx-4 mt-4 flex flex-row flex-wrap items-center justify-between" style={{ maxWidth: "250px" }}>
                                <p className="font-bold text-2xl price">£11.99</p>
                                <div className="quantity_button flex items-center justify-center flex-wrap">
                                    <button type='button' className='pb-1 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>+</button>
                                    <span className='mx-4 md:mx-7'>1</span>
                                    <button type='button' className='pb-2 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>-</button>
                                </div>
                            </div>
                            <div className="card_bottom flex flex-row flex-wrap items-center justify-between">
                                <div className="mt-4 card_btns flex flex-row flex-nowrap">
                                    <button className={`rounded-full border border-black  p-3 font-bold mt-5 px-7 py-4`}>View Details</button>
                                    <button className={`${style.pill_btn} p-3 ml-3 font-bold mt-5 px-7 py-4`}>Add to Cart</button>
                                </div>
                                <div className="mt-4 compaign_ends_timer items-center justify-between border border-sky-400 rounded-xl px-4 py-1 flex flex-row flex-wrap" style={{ boxShadow: "0px 8px 25px rgba(1, 168, 255, 0.15)" }}>
                                    <h6 className='text-md'>Compaign Ends</h6>
                                    <div className="timer ml-3 flex flex-wrap flex-row items-center justify-between">
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>09</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/12 flex items-end">
                            <div className="icons flex items-center justify-center flex-row">
                                <Link href="/" legacyBehavior>
                                    <a className="heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsHeart />
                                    </a>
                                </Link>
                                <Link href="/" legacyBehavior>
                                    <a className="ml-3 heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsShare />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="badges absolute top-0 right-0 h-14 w-32">
                            <span className="absolute top-2 left-0 rounded-full sold z-10 pl-3 flex flex-col items-start justify-center" style={{ aspectRatio: "1", height: "80px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                <p className='font-semibold text-lg'>25/</p>
                                <p className='-mt-1 text-sm'>Sold</p>
                            </span>
                            <span className="absolute top-5 left-10 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "70px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                <p className='font-semibold text-sm'>45</p>
                            </span>
                        </div>
                    </div>
                    <div className={`${style.shadow_class} relative mt-6 w-full flex flex-row items-stretch bg-white rounded-lg p-3`}>
                        <div className="w-full md:w-1/4">
                            <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <Image
                                    style={{ transform: "scale(1)" }}
                                    src="/images/Guaranteed.svg"
                                    alt="Picture of the author"
                                    height={50}
                                    width={60}
                                    objectFit='contain'
                                />
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 p-4">
                            <h3 className="text-3xl font-semibold mx-0 md:mx-4 my-4">Apple macbook pro m2</h3>
                            <div className="mx-0 md:mx-4 mt-4 flex flex-row flex-wrap items-center justify-between" style={{ maxWidth: "250px" }}>
                                <p className="font-bold text-2xl price">£11.99</p>
                                <div className="quantity_button flex items-center justify-center flex-wrap">
                                    <button type='button' className='pb-1 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>+</button>
                                    <span className='mx-4 md:mx-7'>1</span>
                                    <button type='button' className='pb-2 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>-</button>
                                </div>
                            </div>
                            <div className="card_bottom flex flex-row flex-wrap items-center justify-between">
                                <div className="mt-4 card_btns flex flex-row flex-nowrap">
                                    <button className={`rounded-full border border-black  p-3 font-bold mt-5 px-7 py-4`}>View Details</button>
                                    <button className={`${style.pill_btn} p-3 ml-3 font-bold mt-5 px-7 py-4`}>Add to Cart</button>
                                </div>
                                <div className="mt-4 compaign_ends_timer items-center justify-between border border-sky-400 rounded-xl px-4 py-1 flex flex-row flex-wrap" style={{ boxShadow: "0px 8px 25px rgba(1, 168, 255, 0.15)" }}>
                                    <h6 className='text-md'>Compaign Ends</h6>
                                    <div className="timer ml-3 flex flex-wrap flex-row items-center justify-between">
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>09</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/12 flex items-end">
                            <div className="icons flex items-center justify-center flex-row">
                                <Link href="/" legacyBehavior>
                                    <a className="heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsHeart />
                                    </a>
                                </Link>
                                <Link href="/" legacyBehavior>
                                    <a className="ml-3 heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsShare />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="badges absolute top-0 right-0 h-14 w-32">
                            <span className="absolute top-2 left-0 rounded-full sold z-10 pl-3 flex flex-col items-start justify-center" style={{ aspectRatio: "1", height: "80px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                <p className='font-semibold text-lg'>25/</p>
                                <p className='-mt-1 text-sm'>Sold</p>
                            </span>
                            <span className="absolute top-5 left-10 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "70px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                <p className='font-semibold text-sm'>45</p>
                            </span>
                        </div>
                    </div>
                    <div className={`${style.shadow_class} relative mt-6 w-full flex flex-row items-stretch bg-white rounded-lg p-3`}>
                        <div className="w-full md:w-1/4">
                            <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <Image
                                    style={{ transform: "scale(1)" }}
                                    src="/images/Guaranteed.svg"
                                    alt="Picture of the author"
                                    height={50}
                                    width={60}
                                    objectFit='contain'
                                />
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 p-4">
                            <h3 className="text-3xl font-semibold mx-0 md:mx-4 my-4">Apple macbook pro m2</h3>
                            <div className="mx-0 md:mx-4 mt-4 flex flex-row flex-wrap items-center justify-between" style={{ maxWidth: "250px" }}>
                                <p className="font-bold text-2xl price">£11.99</p>
                                <div className="quantity_button flex items-center justify-center flex-wrap">
                                    <button type='button' className='pb-1 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>+</button>
                                    <span className='mx-4 md:mx-7'>1</span>
                                    <button type='button' className='pb-2 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>-</button>
                                </div>
                            </div>
                            <div className="card_bottom flex flex-row flex-wrap items-center justify-between">
                                <div className="mt-4 card_btns flex flex-row flex-nowrap">
                                    <button className={`rounded-full border border-black  p-3 font-bold mt-5 px-7 py-4`}>View Details</button>
                                    <button className={`${style.pill_btn} p-3 ml-3 font-bold mt-5 px-7 py-4`}>Add to Cart</button>
                                </div>
                                <div className="mt-4 compaign_ends_timer items-center justify-between border border-sky-400 rounded-xl px-4 py-1 flex flex-row flex-wrap" style={{ boxShadow: "0px 8px 25px rgba(1, 168, 255, 0.15)" }}>
                                    <h6 className='text-md'>Compaign Ends</h6>
                                    <div className="timer ml-3 flex flex-wrap flex-row items-center justify-between">
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>09</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/12 flex items-end">
                            <div className="icons flex items-center justify-center flex-row">
                                <Link href="/" legacyBehavior>
                                    <a className="heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsHeart />
                                    </a>
                                </Link>
                                <Link href="/" legacyBehavior>
                                    <a className="ml-3 heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsShare />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="badges absolute top-0 right-0 h-14 w-32">
                            <span className="absolute top-2 left-0 rounded-full sold z-10 pl-3 flex flex-col items-start justify-center" style={{ aspectRatio: "1", height: "80px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                <p className='font-semibold text-lg'>25/</p>
                                <p className='-mt-1 text-sm'>Sold</p>
                            </span>
                            <span className="absolute top-5 left-10 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "70px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                <p className='font-semibold text-sm'>45</p>
                            </span>
                        </div>
                    </div>
                    <div className={`${style.shadow_class} relative mt-6 w-full flex flex-row items-stretch bg-white rounded-lg p-3`}>
                        <div className="w-full md:w-1/4">
                            <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <Image
                                    style={{ transform: "scale(1)" }}
                                    src="/images/Guaranteed.svg"
                                    alt="Picture of the author"
                                    height={50}
                                    width={60}
                                    objectFit='contain'
                                />
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 p-4">
                            <h3 className="text-3xl font-semibold mx-0 md:mx-4 my-4">Apple macbook pro m2</h3>
                            <div className="mx-0 md:mx-4 mt-4 flex flex-row flex-wrap items-center justify-between" style={{ maxWidth: "250px" }}>
                                <p className="font-bold text-2xl price">£11.99</p>
                                <div className="quantity_button flex items-center justify-center flex-wrap">
                                    <button type='button' className='pb-1 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>+</button>
                                    <span className='mx-4 md:mx-7'>1</span>
                                    <button type='button' className='pb-2 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>-</button>
                                </div>
                            </div>
                            <div className="card_bottom flex flex-row flex-wrap items-center justify-between">
                                <div className="mt-4 card_btns flex flex-row flex-nowrap">
                                    <button className={`rounded-full border border-black  p-3 font-bold mt-5 px-7 py-4`}>View Details</button>
                                    <button className={`${style.pill_btn} p-3 ml-3 font-bold mt-5 px-7 py-4`}>Add to Cart</button>
                                </div>
                                <div className="mt-4 compaign_ends_timer items-center justify-between border border-sky-400 rounded-xl px-4 py-1 flex flex-row flex-wrap" style={{ boxShadow: "0px 8px 25px rgba(1, 168, 255, 0.15)" }}>
                                    <h6 className='text-md'>Compaign Ends</h6>
                                    <div className="timer ml-3 flex flex-wrap flex-row items-center justify-between">
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>09</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/12 flex items-end">
                            <div className="icons flex items-center justify-center flex-row">
                                <Link href="/" legacyBehavior>
                                    <a className="heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsHeart />
                                    </a>
                                </Link>
                                <Link href="/" legacyBehavior>
                                    <a className="ml-3 heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsShare />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="badges absolute top-0 right-0 h-14 w-32">
                            <span className="absolute top-2 left-0 rounded-full sold z-10 pl-3 flex flex-col items-start justify-center" style={{ aspectRatio: "1", height: "80px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                <p className='font-semibold text-lg'>25/</p>
                                <p className='-mt-1 text-sm'>Sold</p>
                            </span>
                            <span className="absolute top-5 left-10 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "70px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                <p className='font-semibold text-sm'>45</p>
                            </span>
                        </div>
                    </div>
                    <div className={`${style.shadow_class} relative mt-6 w-full flex flex-row items-stretch bg-white rounded-lg p-3`}>
                        <div className="w-full md:w-1/4">
                            <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#F6F7F9" }}>
                                <Image
                                    style={{ transform: "scale(1)" }}
                                    src="/images/Guaranteed.svg"
                                    alt="Picture of the author"
                                    height={50}
                                    width={60}
                                    objectFit='contain'
                                />
                                <Image
                                    style={{ transform: "scale(0.9)" }}
                                    src="/images/Computer_image.png"
                                    alt="Picture of the author"
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-3/4 p-4">
                            <h3 className="text-3xl font-semibold mx-0 md:mx-4 my-4">Apple macbook pro m2</h3>
                            <div className="mx-0 md:mx-4 mt-4 flex flex-row flex-wrap items-center justify-between" style={{ maxWidth: "250px" }}>
                                <p className="font-bold text-2xl price">£11.99</p>
                                <div className="quantity_button flex items-center justify-center flex-wrap">
                                    <button type='button' className='pb-1 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>+</button>
                                    <span className='mx-4 md:mx-7'>1</span>
                                    <button type='button' className='pb-2 font-medium flex items-center justify-center text-xl bg-slate-200 h-8 w-8 rounded-full'>-</button>
                                </div>
                            </div>
                            <div className="card_bottom flex flex-row flex-wrap items-center justify-between">
                                <div className="mt-4 card_btns flex flex-row flex-nowrap">
                                    <button className={`rounded-full border border-black  p-3 font-bold mt-5 px-7 py-4`}>View Details</button>
                                    <button className={`${style.pill_btn} p-3 ml-3 font-bold mt-5 px-7 py-4`}>Add to Cart</button>
                                </div>
                                <div className="mt-4 compaign_ends_timer items-center justify-between border border-sky-400 rounded-xl px-4 py-1 flex flex-row flex-wrap" style={{ boxShadow: "0px 8px 25px rgba(1, 168, 255, 0.15)" }}>
                                    <h6 className='text-md'>Compaign Ends</h6>
                                    <div className="timer ml-3 flex flex-wrap flex-row items-center justify-between">
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>02</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>09</span>
                                        <span className='bg-sky-400 p-2 font-bold text-xl ml-2 rounded-lg text-white'>25</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/12 flex items-end">
                            <div className="icons flex items-center justify-center flex-row">
                                <Link href="/" legacyBehavior>
                                    <a className="heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsHeart />
                                    </a>
                                </Link>
                                <Link href="/" legacyBehavior>
                                    <a className="ml-3 heart_icon border border-red-500 h-8 w-8 flex items-center justify-center text-red-500 rounded-md">
                                        <BsShare />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="badges absolute top-0 right-0 h-14 w-32">
                            <span className="absolute top-2 left-0 rounded-full sold z-10 pl-3 flex flex-col items-start justify-center" style={{ aspectRatio: "1", height: "80px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #F8B725 100%)" }}>
                                <p className='font-semibold text-lg'>25/</p>
                                <p className='-mt-1 text-sm'>Sold</p>
                            </span>
                            <span className="absolute top-5 left-10 rounded-full sold z-20 flex flex-col items-center justify-center" style={{ aspectRatio: "1", height: "70px", background: "radial-gradient(50% 50% at 50% 50%, #FFE875 0%, #FBD04D 100%)" }}>
                                <p className='-mt-1' style={{ fontSize: "10px" }}>Out of</p>
                                <p className='font-semibold text-sm'>45</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveCompaign
