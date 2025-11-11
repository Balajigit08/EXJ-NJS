"use client";
import Image from "next/image";
export default function Japantrails() {
    return (
        <section className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-half-w1 lg:max-w-half-w xl:max-w-full 2xl:max-w-full mx-auto text-center  sm:mt-10 overflow-hidden">

            {/* Title */}
            <h2 className="flex flex-col mt-4 sm:flex-row sm:flex-wrap lg:flex-col sm:justify-center items-center gap-1 sm:gap-2 leading-tight">
                <span className="text-xl font-bold text-tx w-2xl text-ptx xs:text-[1.4rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-gatetext xl:text-[3rem] 2xl:text-[3.5rem] wrap-break-word">
                    Discover
                </span></h2>
            <h2>
                <span className="text-2xl font-normal font-protest text-pc text-[1.6rem] xs:text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-gatetext1 xl:text-[3.8rem] 2xl:text-[4.5rem] wrap-break-words">
                    Japan Trails
                </span>
            </h2>

            {/* Paragraph */}
            <p className=" w-full text-center text-xl text-tx1 mt-3 sm:mt-4 md:mt-5  text-[0.8rem] sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed lg:mt-1 max-w-[1050px] mx-auto px-3 sm:px-0">
                Uncover the beauty of Japan with routes designed for every traveler. Whether it’s iconic cities or hidden gems, our trails bring you closer to the heart of the nation.
                </p>
                <div className="w-full max-w-dw m-auto ">
                    <Image
                        src="/Frame_1(5).gif"
                        alt="animation"
                        width={1440}
                        height={256}
                        className="mt-5 relative z-10 w-full max-w-dw"
                    />

                </div>
        </section>
    );

}