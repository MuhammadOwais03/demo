import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./ShopCarousel.css";

const products = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173650498456339_8b171375-9f2c-42f7-9d92-d25bae20e607.jpg?v=1736509958&width=280",
    name: "Rang-e-Haya",
    items: "212 items",
    discount: "Upto 70% off",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173278068573700_98b1c7d9-f959-472f-b4a8-da4ceaae4c0f.jpg?v=1733116801&width=280",
    name: "Luxury Charm",
    items: "120 items",
    discount: "Upto 50% off",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-173841346300806_eb3f22ca-da44-468d-a595-e3433b6b7d67.jpg?v=1739447530&width=280",
    name: "Graceful Look",
    items: "320 items",
    discount: "Upto 40% off",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/cropped_image-172867116231799_93337b61-8a93-4285-b867-15c4c3da52e8.jpg?v=1728921677&width=280",
    name: "Elegant Collection",
    items: "500 items",
    discount: "Up to 60% off",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/large-_0028_EvergreenJade_5_50f904b2-814e-4d1d-9a61-33310f24226f.jpg?v=1728473329&width=300",
    name: "Stylish Wear",
    items: "100 items",
    discount: "Upto 30% off",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/2337/7003/files/973ddbaf56977350cac8177e85bc34cc.jpg?v=1721651740&width=280",
    name: "Stylish Wear",
    items: "100 items",
    discount: "Upto 30% off",
  },
];

const ShopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = window.innerWidth >= 1024 ? 4 : 2;

  const handleNext = () => {
    if (currentIndex + itemsPerView < products.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <h2 className="text-lg font-semibold mb-2 sm:text-3xl">Trending Products</h2>
      <div className="relative overflow-hidden py-8">
        <button className="arrow-button left shadow-sm" onClick={handlePrev}>
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>

        <motion.div
          className="flex gap-4 transition-transform duration-500"
          animate={{ x: -currentIndex * (100 / itemsPerView) + "%" }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{ width: `${products.length * (100 / itemsPerView)}%` }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="relative bg-white overflow-hidden w-1/2"
              transition={{ duration: 0.5 }}
            >
              <span className="absolute bottom-20 left-3 text-red-700 text-md font-semibold px-3 py-1 rounded-md bg-red-100">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 md:h-80 xl:h-[350px] object-cover rounded-lg transition-all duration-300 cursor-pointer"
              />
              <h3 className="text-md font-semibold my-1 mt-2">{product.name}</h3>
              <p className="text-md text-gray-600">{product.items}</p>
            </motion.div>
          ))}
        </motion.div>

        <button className="arrow-button right shadow-sm" onClick={handleNext}>
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
        </button>
      </div>
    </>
  );
};

export default ShopCarousel;
