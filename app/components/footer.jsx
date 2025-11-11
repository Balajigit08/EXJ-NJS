import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-footc  xl:h-[250px] flex flex-col lg:flex-row items-center w-full max-w-dw m-auto overflow-hidden px-4 sm:px-6 md:px-8 py-8 sm:py-10 lg:py-0 gap-6 sm:gap-8 lg:gap-0">
            {/* Map Image */}
            <div className="shrink-0 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-none lg:w-auto lg:mt-3">
                <Image
                    src="/Frame1928.png"
                    width={386}
                    height={239}
                    alt='map'
                    className="w-full h-auto lg:w-[320px] xl:w-[386px]"
                />
            </div>
            
            {/* Text Content */}
            <div className="lg:-ml-5 w-full lg:w-auto text-center lg:text-left lg:mt-10">
                <h1 className="text-a-color font-bold text-19 sm:text-xl md:text-2xl lg:text-[44px] xl:text-footxt mb-3 sm:mb-4 px-2 sm:px-0">
                    Travel beyond your imagination
                </h1>
                <p className="text-a-color text-xs sm:text-sm md:text-base lg:text-[14px] xl:text-anchor text-center leading-relaxed px-2 sm:px-4 lg:px-0">
                    Copyright ©2025 All rights reserved | FujiSakura Technologies PVT LTD.
                    <span className="block sm:inline sm:ml-1">
                        <a href="#" className='hover:underline transition-all duration-300'>
                            Privacy Policy | Company Policy
                        </a>
                    </span>
                </p>
            </div>
        </div>
    )
}