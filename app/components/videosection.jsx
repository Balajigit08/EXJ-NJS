"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function VideoSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);
  const autoSlideRef = useRef(null);

  const totalUniqueSlides = 5;

  const slides = [
    { id: 1, src: "/Rectangle5633.png", title: "Cruises" },
    { id: 2, src: "/Rectangle5634.png", title: "Wild Life" },
    { id: 3, src: "/Rectangle5635.png", title: "Walking" },
    { id: 4, src: "/Rectangle5636.png", title: "Hiking" },
    { id: 5, src: "/Rectangle5637.png", title: "Fly Bird" },
  ];

  const allSlides = [...slides, ...slides, ...slides, ...slides, ...slides];

  const getSlideWidth = () => {
    if (sliderRef.current) {
      const slideElement = sliderRef.current.querySelector(".slide-item");
      if (slideElement) {
        const slideWidth = slideElement.offsetWidth;
        const gap = 40; // smaller gap for mobile
        return slideWidth + gap;
      }
    }
    return 332 + 40;
  };

  const getSlideStyles = (index) => {
    const position = index - currentIndex;
    const firstImg = 332;
    const rotationOffset = (firstImg / 2) * Math.sin((8 * Math.PI) / 180);
    let styles = {
      transform: "",
      opacity: 1,
      transition: isTransitioning
        ? "none"
        : "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease",
    };

    if (position === 0) styles.transform = `translate(0px, 0px) rotate(0deg) scale(1)`;
    else if (position === -1) styles.transform = `translate(0px, ${rotationOffset}px) rotate(-8deg) scale(1)`;
    else if (position === 1) styles.transform = `translate(0px, ${rotationOffset}px) rotate(8deg) scale(1)`;
    else if (position === -2) {
      styles.transform = `translate(-120px, ${rotationOffset + 130}px) rotate(-15deg) scale(0.85)`;
      styles.opacity = 0;
    } else if (position === 2) {
      styles.transform = `translate(120px, ${rotationOffset + 130}px) rotate(15deg) scale(0.85)`;
      styles.opacity = 0;
    } else {
      styles.transform = `translate(0px, ${rotationOffset + 150}px) scale(0.7)`;
      styles.opacity = 0;
    }

    return styles;
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  };

  useEffect(() => {
    if (currentIndex >= totalUniqueSlides * 3) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalUniqueSlides * 2);
        setTimeout(() => setIsTransitioning(false), 20);
      }, 800);
    } else if (currentIndex < totalUniqueSlides * 2) {
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalUniqueSlides * 3);
        setTimeout(() => setIsTransitioning(false), 20);
      }, 800);
    }
  }, [currentIndex]);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.clientX);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 5) setHasMoved(true);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!hasMoved) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
      stopAutoSlide();
      diff < 0
        ? setCurrentIndex((prev) => prev + 1)
        : setCurrentIndex((prev) => prev - 1);
      startAutoSlide();
    }
  };

  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      stopAutoSlide();
      diff < 0
        ? setCurrentIndex((prev) => prev + 1)
        : setCurrentIndex((prev) => prev - 1);
      startAutoSlide();
    }
  };

  const dotIndex = currentIndex % totalUniqueSlides;

  return (
    <div className="relative w-full max-w-dw mx-auto overflow-hidden px-4 sm:px-6 lg:px-10 lg:flex">
      {/* Background Video */}
      <div className="relative w-full">
        <video
          autoPlay
          muted
          loop
          className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] lg:mt-10 xl:w-vw 
          xl:h-[515px]"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Text on video */}
        <div className="absolute bottom-6 sm:bottom-10 w-full text-center lg:bottom-10">
          <p style={{ fontFamily: '"Hi Melody", sans-serif' }} className="text-white text-sm sm:text-lg md:text-xl lg:text-vtxt tracking-wide font-melody">
            Journeys You Can't Miss
          </p>
          <h1 className="text-white text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mt-2">
            Beyond Borders
          </h1>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative  w-full max-w-dw mt-8 sm:mt-12 overflow-hidden z-10 lg:ml-10 xl:w-[120%] xl:mt-20">
        <div
          ref={sliderRef}
          className="flex gap-6 ml-60 sm:gap-10 sm:ml-50 md:ml-60 lg:ml-5 cursor-grab active:cursor-grabbing 
          transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${getSlideWidth() * currentIndex}px)`,
            transition: isTransitioning ? "none" : "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {allSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="slide-item shrink-0 w-[180px] sm:w-[250px] md:w-[300px] lg:w-[300px]"
              style={getSlideStyles(index)}
            >
              <Image
                className="object-cover "
                src={slide.src}
                alt={slide.title}
                width={332}
                height={384}
              />
              <div className="text-center mt-3 sm:mt-4">
                <p className="font-bold text-sm sm:text-base md:text-lg text-ptx text-gray-800">
                  {slide.title}
                </p>
                <a
                  href="#"
                  className="text-anchorc text-anchor sm:text-sm font-normal hover:underline"
                  onMouseEnter={stopAutoSlide}
                  onMouseLeave={startAutoSlide}
                >
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoSlide();
                setCurrentIndex(totalUniqueSlides * 2 + index); // ✅ fixed
                startAutoSlide();
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all cursor-pointer ${index === dotIndex ? "bg-anchorc scale-125" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Map (hidden on mobile) */}
      <div className="absolute top-0 right-0 hidden lg:block mr-10 z-0">
        <Image src="/Map.png" alt="Map" width={442} height={508} className="object-contain" />
      </div>
    </div>
  );
}
