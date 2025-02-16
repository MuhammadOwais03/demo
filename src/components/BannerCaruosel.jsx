import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import cr_1 from "../assets/cr_1.jpg";
import cr_2 from "../assets/cr_2.jpg";
import cr_3 from "../assets/cr_3.jpg";
import cr_4 from "../assets/cr_4.jpg";
import CategoryCarousel from "./CategoryCarousel";

const images = [cr_4, cr_2, cr_3, cr_1];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  // Go to next slide
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to previous slide
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Container */}
      <div className="relative w-full max-w-[1000px] max-h-68 md:max-h-96 aspect-[16/9] overflow-hidden">
        <AnimatePresence mode="wait" >
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-fill md:rounded-3xl"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 md:p-3 shadow-lg rounded-full hover:bg-opacity-100 transition duration-300 cursor-pointer"
          onClick={prevSlide}
        >
          <ChevronLeft size={22} className="text-gray-700" />
        </button>
        <button
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 md:p-3 shadow-lg rounded-full hover:bg-opacity-100 transition duration-300 cursor-pointer"
          onClick={nextSlide}
        >
          <ChevronRight size={22} className="text-gray-700" />
        </button>
      </div>

      {/* Category Carousel Below */}
      <CategoryCarousel type="Women"/>
      <CategoryCarousel type="Men"/>
    </div>
  );
}
