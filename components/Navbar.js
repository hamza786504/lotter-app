import React , { useState } from 'react'
import Link from "next/link";
import style from '@/styles/Navbar.module.css'

const menuLinks = [
    {
      name: "Home"
    },
    {
      name: "Blog"
    }
  ];

  
function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <nav className="fixed w-full py-4">
                <div className={`${style.container_width} mx-auto flex justify-between items-center`}>
                    <div className="logo_menu flex items-center justify-between w-3/6">
                        <div className='logo_cover'>
                            <Link href="/" legacyBehavior>
                                <a className="text-dark font-bold text-xl">Logo</a>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:items-center">
                            <Link href="/" legacyBehavior>
                                <a className="text-white px-3 py-2 md:ml-5 rounded-md text-sm font-medium">
                                    Home
                                </a>
                            </Link>
                            <Link href="/compaigns" legacyBehavior>
                                <a className="text-white px-3 py-2 md:ml-5 rounded-md text-sm font-medium">
                                    Campaigns
                                </a>
                            </Link>
                            <Link href="/winners" legacyBehavior>
                                <a className="text-white px-3 py-2 md:ml-5 rounded-md text-sm font-medium">
                                    Winners
                                </a>
                            </Link>
                            <Link href="/why-us" legacyBehavior>
                                <a className="text-white px-3 py-2 md:ml-5 rounded-md text-sm font-medium">
                                    Why Us
                                </a>
                            </Link>
                            <Link href="/blog" legacyBehavior>
                                <a className="text-white px-3 py-2 md:ml-5 rounded-md text-sm font-medium">
                                    Blog
                                </a>
                            </Link>
                        </div>
                    </div>


                    <div className="hidden md:block md:ml-4">
                        <Link href="/register" legacyBehavior>
                            <a className={`${style.darkblue_square_btn} border text-white py-3 px-5 text-sm font-sm`}>
                                Register
                            </a>
                        </Link>
                        <Link href="/login" legacyBehavior>
                            <a className={`${style.hollow_white_btn} border border-white rounded-none text-white py-3 px-5 text-sm font-sm`}>
                                Sign In
                            </a>
                        </Link>
                    </div>
                </div>



                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {menuLinks.map((link) => (
                                <Link key={link.name} href={link.href} passHref>
                                    <a
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {link.name}
                                    </a>
                                </Link>
                            ))}
                            <Link href="/signin" passHref>
                                <a
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Sign In
                                </a>
                            </Link>
                        </div>
                    </div>
                )}


            </nav>
        </>
    )
}

export default Navbar
