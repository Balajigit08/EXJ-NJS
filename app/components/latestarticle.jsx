'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Latestarticle() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    return (
        <div ref={sectionRef} className="w-full max-w-full m-auto overflow-hidden">
            <h2 className="text-center mt-5">
                <span className="text-xl font-bold text-tx w-2xl text-ptx xs:text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-gatetext xl:text-[3rem] 2xl:text-[3.5rem] wrap-break-word">Read Our</span><br />
                <span className="text-2xl font-normal font-protest text-pc text-[1.6rem] xs:text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-gatetext1 xl:text-[3.8rem] 2xl:text-[4.5rem] wrap-break-words"> Latest Article</span>
            </h2>
            <p className="w-full text-center text-xl text-tx1 mt-3 sm:mt-4 md:mt-5  text-[0.8rem] sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed lg:mt-1 max-w-[950px] mx-auto px-3 sm:px-0">Japan is a land where timeless traditions meet modern
                wonders, offering travelers a journey filled with culture, cuisine, and breathtaking landscapes.
            </p>
            <div className="flex flex-col lg:flex-row  items-center justify-center overflow-hidden w-full max-w-dw m-auto mb-10">
                <div className={`w-full lg:w-auto lg:flex-1 lg:max-w-[500px] xl:max-w-tw xl:mx-auto 2xl:max-w-[800px] 2xl:mx-auto transition-all duration-1000 md:m-3 ${isVisible ? 'translate-x-0 opacity-100' : 'lg:-translate-x-full opacity-0'
                    }`}>
                    <div className="flex lg:m-0 lg:mt-5 xl:m-10  items-center bg-conbg rounded-tl-4xl rounded-bl-4xl m-2 mt-5">
                        <div className="rounded-full w-cw h-cw bg-circl1 shrink-0"></div>
                        <div className="pl-2.5">
                            <span className="text-tx1 font-bold text-xs lg:text-anchor md:text-anchor">Tokoyo's Vibrance-</span>
                            <span className="text-tx1 text-xs lg:text-anchor md:text-anchor">Explore the perfect blend of technology,fashion,and nightlife</span>
                        </div>
                    </div>
                    <div className="flex lg:m-0 lg:mt-5  xl:m-10 items-center bg-conbg rounded-tl-4xl rounded-bl-4xl m-2 mt-5">
                        <div className="rounded-full w-cw h-cw bg-circl2 shrink-0"></div>
                        <div className="pl-2.5">
                            <span className="text-tx1 font-bold text-xs lg:text-anchor md:text-anchor">Kyoto’s Traditions –</span>
                            <span className="text-tx1 text-xs lg:text-anchor md:text-anchor"> Discover temples, tea ceremonies, and cultural heritage.</span>
                        </div>
                    </div>
                    <div className="flex lg:m-0 lg:mt-5 xl:m-10 items-center bg-conbg rounded-tl-4xl rounded-bl-4xl m-2 mt-5">
                        <div className="rounded-full w-cw h-cw bg-circl3 shrink-0"></div>
                        <div className="pl-2.5">
                            <span className="text-tx1 font-bold text-xs lg:text-anchor md:text-anchor">Osaka’s Flavors – </span>
                            <span className="text-tx1 text-xs lg:text-anchor md:text-anchor">Taste street food, sushi, and Japan’s best comfort dishes.</span>
                        </div>
                    </div>
                    <div className="flex lg:m-0 lg:mt-5 xl:m-10  items-center bg-conbg rounded-tl-4xl rounded-bl-4xl m-2 mt-5">
                        <div className="rounded-full w-cw h-cw bg-circl4 shrink-0"></div>
                        <div className="pl-2.5">
                            <span className="text-tx1 font-bold text-xs lg:text-anchor md:text-anchor">Nature Escapes – </span>
                            <span className="text-tx1 text-xs lg:text-anchor md:text-anchor">Visit Mt. Fuji, hot springs, and serene countryside.</span>
                        </div>
                    </div>
                    <div className="flex lg:m-0 lg:mt-5 xl:m-10 items-center bg-conbg rounded-tl-4xl rounded-bl-4xl m-2 mt-5">
                        <div className="rounded-full w-cw h-cw bg-circl5 shrink-0"></div>
                        <div className="pl-2.5">
                            <span className="text-tx1 font-bold text-xs lg:text-anchor md:text-anchor">Cultural Etiquette –</span>
                            <span className="text-tx1 text-xs lg:text-anchor md:text-anchor"> Learn the customs that make Japanese hospitality unique.</span>
                        </div>
                    </div>
                </div>
                <div className={`relative lg:mr-10 w-full flex items-center justify-center lg:w-[400px] lg:shrink-0 overflow-hidden rounded-l-lg sm:w-slidew sm:mb-3 md:w-slidew transition-all duration-1000 xl:w-[500px] 2xl:w-slidew ${isVisible ? 'translate-x-0 opacity-100' : 'lg:translate-x-full opacity-0'
                    }`}>
                    <Image
                        src="/Rectangle5647.png"
                        width={555}
                        height={451}
                        alt="Article image"
                        className="w-[300px] h-auto object-contain sm:w-slidew md:w-slidew lg:w-[400px] xl:w-[500px] 2xl:w-slidew"
                    />
                </div>
            </div>
        </div>
    );
}