"use client";
import { useEffect, useRef } from "react";

export default function Scroll() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  useEffect(() => {
    // First row: scroll left then back right
    firstRowRef.current.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-200px)" }, // move left
        { transform: "translateX(0)" },
      ],
      {
        duration: 6000, // 6 seconds
        iterations: Infinity,
        easing: "linear",
      }
    );

    // Second row: scroll right then back left
    secondRowRef.current.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(200px)" }, // move right
        { transform: "translateX(0)" },
      ],
      {
        duration: 6000,
        iterations: Infinity,
        easing: "linear",
      }
    );
  }, []);

  return (
    <div className="w-full overflow-hidden w-full max-w-dw m-auto">
      {/* First Row */}
      <div className="overflow-hidden w-full">
        <ul
          ref={firstRowRef}
          className="flex w-max my-2.5 px-2.5 gap-6 sm:gap-10 mt-10"
        >
          <li className="bg-bg1 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Mount Fuji
          </li>
          <li className="bg-bg2 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Skytree
          </li>
          <li className="bg-bg3 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Golden Pavilion
          </li>
          <li className="bg-bg4 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Nara Park
          </li>
          <li className="bg-bg5 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Osaka Castle
          </li>
          <li className="bg-bg6 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Hiroshima Peace Memorial
          </li>
          <li className="bg-bg7 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Hokkaido
          </li>
          <li className="bg-bg8 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Sapporo
          </li>
        </ul>
      </div>

      {/* Second Row */}
      <div className="overflow-hidden w-full">
        <ul
          ref={secondRowRef}
          className="flex w-max my-2.5 px-2.5 gap-6 sm:gap-9 mt-5"
        >
          <li className="bg-bg9 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Arashiyama Bamboo Grove
          </li>
          <li className="bg-bg10 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Shibuya Crossing
          </li>
          <li className="bg-bg11 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Ghibli Museum
          </li>
          <li className="bg-bg12 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Nagoya Castle
          </li>
          <li className="bg-bg13 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Hakone
          </li>
          <li className="bg-bg14 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Kamakura
          </li>
          <li className="bg-bg15 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Nikko
          </li>
          <li className="bg-bg16 py-2 sm:py-3 px-4 sm:px-6 rounded-sr text-a-color font-bold font-helvetica text-sm sm:text-base whitespace-nowrap">
            Takayama
          </li>
        </ul>
      </div>
    </div>
  );
}