"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["/Group1918.png", "/Group1919.png", "/Group1920.png"];

export default function ZoomFadeSlideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-dw m-auto h-[500px] sm:h-eh lg:h-[725px] -mt-31 overflow-hidden bg-black">
            {images.map((src, i) => (
                <motion.img
                    key={i}
                    src={src}
                    alt={`slide-${i}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{
                        opacity: i === index ? 1 : 0,
                        scale: i === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            ))}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
                <p className="relative z-10 text-a-color text-sm sm:text-lg lg:text-xl uppercase mb-2 sm:mb-4">
                    Lets travel the world with us
                </p>
                <h1 className="relative z-10 text-a-color text-3xl sm:text-5xl lg:text-header-size uppercase font-black w-full max-w-half-w1 md:max-w-half-w lg:max-w-full xl:max-w-half-w leading-tight">
                    Explore The Japan With{" "}
                    <span className="[-webkit-text-stroke:0.5px_#FFFFFF] sm:[-webkit-text-stroke:0.5px_#FFFFFF] text-transparent">
                        Fujisakura
                    </span>
                </h1>
            </div>
        </div>
    );
}