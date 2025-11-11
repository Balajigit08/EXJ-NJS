import Image from "next/image";

export default function Feedback() {
    return (
        <div className="w-full max-w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-4  sm:py-8 md:py-10">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mt-6 sm:mt-8 md:mt-0 max-w-[1400px] mx-auto">
                {/* Image Section */}
                <div className="overflow-hidden rounded-xl sm:rounded-2xl w-full lg:w-1/2 lg:flex-1">
                    <Image
                        src="/Rectangle5661.png"
                        width={656}
                        height={347}
                        alt="zoom-effect"
                        className="scale-100 hover:scale-150 transition-transform duration-10000 ease-in-out cursor-pointer w-full h-auto"
                    />
                </div>

                {/* Textarea and Button Section */}
                <div className="flex flex-col w-full lg:w-1/2 lg:flex-1">
                    {/* Textarea */}
                    <div className="w-full flex-1">
                        <textarea
                            placeholder="Text your travel experience....."
                            className="w-full h-[150px]  sm:h-[250px] md:h-[280px] lg:h-full lg:min-h-[120px] border border-txtbc rounded-md p-3 sm:p-4 placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-btncolor resize-none"
                        />
                    </div>

                    {/* Button and Decorative Image */}
                    <div className="flex relative  py-3 sm:mt-8 md:mt-10">
                        <div className="z-10">
                            <button className="bg-btncolor px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-a-color text-sm xs:text-base sm:text-lg rounded-sm hover:opacity-90 cursor-pointer transition-opacity duration-300 whitespace-nowrap">
                                Submit Your Answer
                            </button>
                        </div>
                        <div className="absolute -right-2 sm:right-0 -top-10  sm:-top-1.5 w-20 h-[130px] sm:w-[100px]  md:-top-11  lg:-top-10 lg:w-20">
                            <Image
                                src="/Group1940.png"
                                width={113}
                                height={184}
                                alt="light"
                                className="w-10 h-full object-contain md:w-40"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}