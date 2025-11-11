"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent background scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header className="w-full overflow-hidden bg-transparent relative z-50">
            <nav className="max-w-dw w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-2 relative lg:mt-10">

                {/* Logo */}
                <div className="shrink-0 relative z-50">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={260}
                        height={65}
                        className="w-28 sm:w-40 lg:w-[170px] xl:w-[260px] h-auto"
                        priority
                    />
                </div>

                {/* Hamburger / Close Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-b-color hover:text-a-color transition-colors duration-200 focus:outline-none relative z-60"
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex lg:gap-x-6 lg:mt-3 text-base lg:text-xl whitespace-nowrap xl:gap-x-10 xl:text-2xl 2xl:text-2xl 2xl:gap-x-30 ">
                    <li className="text-b-color hover:text-a-color hover:[-webkit-text-stroke:1px_white] cursor-pointer transition-colors duration-200">DESTINATION</li>
                    <li className="text-b-color hover:text-a-color hover:[-webkit-text-stroke:1px_white]  cursor-pointer transition-colors duration-200">JAPANFOOD</li>
                    <li className="text-b-color hover:text-a-color hover:[-webkit-text-stroke:1px_white]  cursor-pointer transition-colors duration-200">JAPANCULTURE</li>
                    <li className="text-b-color hover:text-a-color hover:[-webkit-text-stroke:1px_white] cursor-pointer transition-colors duration-200">WEEKEND GATEWAYS</li>
                </ul>

                {/* Language Switcher (desktop only) */}
                <div className="hidden lg:flex items-center gap-2 text-lg mt-3">
                    <span className="text-b-color hover:text-a-color cursor-pointer transition-colors duration-200">ENG</span>
                    <span className="text-b-color">/</span>
                    <span className="text-b-color hover:text-a-color cursor-pointer transition-colors duration-200">JAP</span>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-24 z-40">
                    <div className="bg-white text-center rounded-2xl shadow-lg w-[85%] sm:w-half-w2 md:w-[50%] max-h-[80vh] overflow-y-auto py-8 animate-slideDown relative z-40">
                        <ul className="flex flex-col gap-6 text-lg font-medium">
                            <li className="text-gray-700 hover:text-black transition-colors cursor-pointer">DESTINATION</li>
                            <li className="text-gray-700 hover:text-black transition-colors cursor-pointer">JAPANFOOD</li>
                            <li className="text-gray-700 hover:text-black transition-colors cursor-pointer">JAPANCULTURE</li>
                            <li className="text-gray-700 hover:text-black transition-colors cursor-pointer">WEEKEND GATEWAYS</li>
                            <li className="text-gray-700 hover:text-black transition-colors cursor-pointer">ENG/JAP</li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Divider */}
            <hr className="border border-hr-color opacity-70 mx-4 sm:mx-6 lg:mx-10 relative z-10" />
        </header>
    );
}
