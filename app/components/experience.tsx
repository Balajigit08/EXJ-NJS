"use client"
import Image from "next/image";

export default function Experience() {
    const testimonials = [
        {
            name: "Johnathan Godwin",
            image: "/Ellipse318.png",
            text: "Japan is a land where tradition and modernity live side by side. From the bustling streets of Tokyo filled with neon lights and cutting-edge technology to the quiet temples of Kyoto where centuries-old rituals are still practiced, every journey offers a unique perspective. The country's ability to balance innovation with heritage makes it unlike any other destination."
        },
        {
            name: "Ivy May",
            image: "/Ellipse319.png",
            text: "Japan is a land where tradition and modernity live side by side. From the bustling streets of Tokyo filled with neon lights and cutting-edge technology to the quiet temples of Kyoto where centuries-old rituals are still practiced, every journey offers a unique perspective. The country's ability to balance innovation with heritage makes it unlike any other destination."
        },
        {
            name: "Ronda Berry",
            image: "/Ellipse320.png",
            text: "Japan is a land where tradition and modernity live side by side. From the bustling streets of Tokyo filled with neon lights and cutting-edge technology to the quiet temples of Kyoto where centuries-old rituals are still practiced, every journey offers a unique perspective. The country's ability to balance innovation with heritage makes it unlike any other destination."
        }
    ];

    return (
        <div className="bg-[url('/Frame1919.png')] bg-cover bg-center min-h-[400px] sm:min-h-[500px] md:min-h-slidew lg:h-eh w-full max-w-dw m-auto overflow-hidden pb-8 sm:pb-10 md:pb-12">
            {/* Heading */}
            <h2 className="text-center mt-4 sm:mt-5 px-4">
                <span className="block text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-a-color">
                    Unforgettable
                </span>
                <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal font-protest text-a-color mt-1">
                    Travel Experiences
                </span>
            </h2>

            {/* Subtitle */}
            <p className="w-full text-center text-a-color mt-3 sm:mt-4 md:mt-5 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-[95%] xs:max-w-[90%] sm:max-w-half-w md:max-w-[750px] lg:max-w-[950px] mx-auto px-4 sm:px-6">
                Japan is a land where timeless traditions meet modern wonders,
                offering travelers a journey filled with culture, cuisine, and breathtaking landscapes.
            </p>

            {/* Infinite Horizontal Scroll Section */}
            <div className="mt-6 sm:mt-8 md:mt-10 overflow-hidden w-full">
                <div className="flex gap-x-4 xs:gap-x-6 sm:gap-x-8 md:gap-x-10 animate-infinite-scroll">
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-slidebg rounded-lg shrink-0 w-[280px] xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-slidew min-h-[250px] xs:min-h-[260px] sm:min-h-[270px] md:min-h-[280px]"
                        >
                            <div className="pl-4 sm:pl-5 flex items-center gap-3 sm:gap-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="mt-4 sm:mt-5 rounded-full object-cover w-10 h-10 sm:w-[45px] sm:h-[45px] md:w-[51px] md:h-[51px]"
                                />
                                <h1 className="mt-4 sm:mt-5 font-bold text-sm sm:text-base md:text-lg">
                                    {testimonial.name}
                                </h1>
                            </div>
                            <div className="m-4 sm:m-5">
                                <p className="text-anchor text-xs xs:text-sm sm:text-base leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
