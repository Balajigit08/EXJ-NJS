"use client";
import React, { useState } from 'react';
import Image from "next/image";

export default function Destination() {
    const [activeIndex, setActiveIndex] = useState(null);

    const images = [
        {
            src: "/Group1910.png",
            alt: "Japan 1",
            title: "Fuji Mountain",
            description: "Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country."
        },
        {
            src: "/Group1911.png",
            alt: "Japan 2",
            title: "Cherry Blossoms",
            description: "Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country."
        },
        {
            src: "/Group1912.png",
            alt: "Japan 3",
            title: "Tokyo Streets",
            description: "Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country."
        },
        {
            src: "/Group1913.png",
            alt: "Japan 4",
            title: "Traditional Temple",
            description: "Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country."
        },
        {
            src: "/Group1914.png",
            alt: "Japan 5",
            title: "Night Cityscape",
            description: "Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country."
        }
    ];

    const handleImageClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-desbg relative z-10 overflow-hidden w-full max-w-dw m-auto">
            <h2 className="text-center mt-5">
                <span className="text-xl font-bold text-tx w-2xl text-ptx xs:text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-gatetext xl:text-[3rem] 2xl:text-[3.5rem] wrap-break-word">Popular</span><br />
                <span className="text-2xl font-normal font-protest text-pc text-[1.6rem] xs:text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-gatetext1 xl:text-[3.8rem] 2xl:text-[4.5rem] wrap-break-words">Destinations</span>
            </h2>
            <p className="w-full text-center text-xl text-tx1 mt-3 sm:mt-4 md:mt-5 text-[0.8rem] sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed lg:mt-1 max-w-[1000px] mx-auto px-3 sm:px-0">
                Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country our My Japan, one of the best travel
                agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across.
            </p>
            <div className="w-full max-w-full text-center absolute xl:-top-20 -z-10 overflow-hidden sm:top-0">
                <h1 className="font-black text-japs text-japc sm:text-[150px] sm:block lg:text-[200px] xl:text-japs hidden">JAPAN</h1>
            </div>

            <div className="w-full max-w-full overflow-hidden h-96">
                {/* Mobile & Tablet (Below 1024px): Scrollable Click Version */}
                <div className="block min-[1024px]:hidden overflow-x-auto overflow-y-hidden h-full">
                    <div className="flex gap-x-4 px-4 py-10 min-w-max">
                        {images.map((image, index) => (
                            <div key={index} className="shrink-0">
                                <div 
                                    className="group/item relative overflow-hidden"
                                    onClick={() => handleImageClick(index)}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-[242px] h-[290px] object-cover cursor-pointer transition-transform duration-500"
                                    />
                                    <div className={`absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 to-transparent 
                                        transition-all duration-500 ease-out text-white
                                        ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <p className="text-center">
                                                <span className="font-bold text-lg">{image.title}</span>
                                                <br />
                                                {image.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop (From 1024px and Above): Hover Animation */}
                <div className="hidden min-[1024px]:block">
                    <div className="group flex w-full justify-center gap-x-10 transition-transform duration-500 mt-10 lg:mr-10 lg:gap-x-5">
                        {/* Image 1 */}
                        <div className="relative z-20 translate-y-12 translate-x-[120px] transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                            <div className="group/item relative overflow-hidden">
                                <img
                                    src="/Group1910.png"
                                    alt="Japan 1"
                                    className="w-[242px] h-[290px] object-cover cursor-pointer transition-transform duration-500 lg:w-[220px] xl:w-[242px] lg:h-full lg:m-2 group-hover/item:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 to-transparent 
                                    opacity-0 translate-y-full transition-all duration-500 ease-out 
                                    group-hover/item:opacity-100 group-hover/item:translate-y-0 text-white">
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-center">
                                            <span className="font-bold text-lg">Fuji Mountain</span>
                                            <br />
                                            Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative translate-y-5 translate-x-[60px] transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 z-10">
                            <div className="group/item relative overflow-hidden">
                                <img
                                    src="/Group1911.png"
                                    alt="Japan 2"
                                    className="w-[242px] h-[290px] object-cover cursor-pointer transition-transform duration-500 lg:w-[220px] lg:h-full lg:m-2 xl:w-[242px] group-hover/item:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 to-transparent 
                                    opacity-0 translate-y-full transition-all duration-500 ease-out 
                                    group-hover/item:opacity-100 group-hover/item:translate-y-0 text-white">
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-center">
                                            <span className="font-bold text-lg">Cherry Blossoms</span>
                                            <br />
                                            Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="relative -translate-y-5 transition-all duration-500 group-hover:translate-y-0">
                            <div className="group/item relative overflow-hidden">
                                <img
                                    src="/Group1912.png"
                                    alt="Japan 3"
                                    className="w-[242px] h-[290px] object-cover cursor-pointer transition-transform duration-500 lg:w-[220px] lg:h-full xl:w-[242px] lg:m-2 group-hover/item:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 to-transparent 
                                    opacity-0 translate-y-full transition-all duration-500 ease-out 
                                    group-hover/item:opacity-100 group-hover/item:translate-y-0 text-white">
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-center">
                                            <span className="font-bold text-lg">Tokyo Streets</span>
                                            <br />
                                            Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image 4 */}
                        <div className="relative translate-y-5 -translate-x-[60px] transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                            <div className="group/item relative overflow-hidden">
                                <img
                                    src="/Group1913.png"
                                    alt="Japan 4"
                                    className="w-[242px] h-[290px] object-cover cursor-pointer transition-transform duration-500 lg:w-[220px] xl:w-[242px] lg:h-full lg:m-2  group-hover/item:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 to-transparent 
                                    opacity-0 translate-y-full transition-all duration-500 ease-out 
                                    group-hover/item:opacity-100 group-hover/item:translate-y-0 text-white">
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-center">
                                            <span className="font-bold text-lg">Traditional Temple</span>
                                            <br />
                                            Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image 5 */}
                        <div className="relative z-10 translate-y-12 -translate-x-[120px] transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                            <div className="group/item relative overflow-hidden">
                                <img
                                    src="/Group1914.png"
                                    alt="Japan 5"
                                    className="w-[242px] h-[290px] object-cover cursor-pointer transition-transform duration-500 lg:w-[220px] lg:h-full xl:w-[242px] lg:m-2 group-hover/item:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/90 to-transparent 
                                    opacity-0 translate-y-full transition-all duration-500 ease-out 
                                    group-hover/item:opacity-100 group-hover/item:translate-y-0 text-white">
                                    <div className="absolute bottom-0 left-0 right-0 p-5">
                                        <p className="text-center">
                                            <span className="font-bold text-lg">Night Cityscape</span>
                                            <br />
                                            Our My Japan, one of the best travel agencies in Japan, offers custom-crafted tour packages for unforgettable holiday experiences across the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Image */}
            <div className="w-full max-w-full m-0 overflow-hidden">
                <Image
                    src="/Group1976.png"
                    width={1440}
                    height={169}
                    alt="bottom image"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
