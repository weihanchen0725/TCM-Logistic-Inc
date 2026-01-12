"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
// import CompanyLogo from '../../assets/images/tcm_logistic_logo.svg'

const NavBar = () => {
    // State for mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md relative transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        {/* <Image src={CompanyLogo} alt="Company Logo" className="h-10 w-auto" /> */}
                        <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">
                            TCM Logistics
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            <Link 
                                href="/" 
                                className="px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            >
                                Home
                            </Link>
                            <Link 
                                href="/about" 
                                className="px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            >
                                About
                            </Link>
                            <Link 
                                href="/services" 
                                className="px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            >
                                Services
                            </Link>
                            <Link 
                                href="/tools" 
                                className="px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            >
                                Tools
                            </Link>
                            <Link 
                                href="/news" 
                                className="px-4 py-2 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                            >
                                News
                            </Link>
                            <Link 
                                href="/contact" 
                                className="ml-2 px-5 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-200"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden space-x-2">
                        <button 
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
                <div className="px-4 py-3 space-y-1">
                    <Link 
                        href="/" 
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                    >
                        About
                    </Link>
                    <Link 
                        href="/services" 
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                    >
                        Services
                    </Link>
                    <Link 
                        href="/tools" 
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                    >
                        Tools
                    </Link>
                    <Link 
                        href="/news" 
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md text-gray-700 font-medium hover:bg-red-50 hover:text-red-600 transition-all duration-200"
                    >
                        News
                    </Link>
                    <Link 
                        href="/contact" 
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-md bg-red-600 text-white font-medium text-center hover:bg-red-700 transition-all duration-200 mt-2"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;