import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing icons
import cat1 from "../assets/cat8.jpg";
import cat2 from "../assets/cat9.jpg";
import cat3 from "../assets/cat10.jpg";
import cat4 from "../assets/cat12.jpg";
import cat5 from "../assets/cat13.jpg";
import cat6 from "../assets/cat14.jpg";

import cat7 from "../assets/cat1.jpg";
import cat8 from "../assets/cat2.jpg";
import cat9 from "../assets/cat3.jpg";
import cat12 from "../assets/cat6.jpg";
import cat13 from "../assets/cat7.jpg";

const categories = {
  Men: [
    {
      title: "Women Daily Pret",
      imgSrc: cat1,
    },
    {
      title: "Women Festive Pret",
      imgSrc: cat2,
    },
    {
      title: "Women Luxury Pret",
      imgSrc: cat3,
    },
    {
      title: "Women Unstitched",
      imgSrc: cat4,
    },
    {
      title: "Modest Wear",
      imgSrc: cat5,
    },
    {
      title: "Women Western",
      imgSrc: cat6,
    },
    {
      title: "Girl Eastern",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/unstitched_1_-173703942127500.png?width=280 ",
    },
  ],

  Women: [
    {
      title: "Men Casual Wear",
      imgSrc: cat7,
    },
    {
      title: "Men Formal Wear",
      imgSrc: cat8,
    },
    {
      title: "Men Western Wear",
      imgSrc: cat9,
    },
    {
      title: "Men Western Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/women-scarf-173937092887098.png?width=280 ",
    },
    {
      title: "Men Western Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/modest-wear-173874094076408.png?width=280 ",
    },
    {
      title: "Men Western Wear",
      imgSrc: cat12,
    },
    {
      title: "Men Western Wear",
      imgSrc: cat13,
    },
  ],

  Accesaries: [
    {
      title: "Men Casual Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/accessories-173937086334987.png?width= ",
    },
    {
      title: "Men Formal Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/women-shawl-173937088273321.png?width=280 ",
    },
    {
      title: "Men Western Wear",
      imgSrc: 'https://cdn.shopify.com/s/files/1/2337/7003/files/jewelry-173937077549955.png?width=280 ',
    },
    {
      title: "Men Western Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/footwear_1_-173937089921910.png?width=280 ",
    },
    {
      title: "Men Western Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/footwear-173937091204195.png?width=280 ",
    },
    {
      title: "Men Western Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/women-scarf-173937092887098.png?width=280" ,
    },
    {
      title: "Men Western Wear",
      imgSrc: "https://cdn.shopify.com/s/files/1/2337/7003/files/bags-173937094757107.png?width=280 ",
    },
  ],
};



function CategoryCarousel({ type }) {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center py-6">
      {/* Left Button */}
      <button
        className="absolute left-0 z-10 bg-white p-2 md:p-3 shadow-sm rounded-full top-24 transform -translate-y-1/2 flex items-center justify-center"
        onClick={scrollLeft}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>

      {/* Scrollable Category List */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4 hide-scrollbar"
        style={{ scrollBehavior: "smooth", overflowX: "scroll", whiteSpace: "nowrap" }}
      >
        {categories[type]?.map((category, index) => (
          <a
            key={index}
            className="flex flex-col items-center min-w-[100px] ml-2 md:min-w-[120px]"
          >
            <div className="w-[140px] h-[140px] overflow-hidden flex justify-center items-center">
              <img
                src={category.imgSrc}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm font-semibold text-center mt-2">{category.title}</h3>
          </a>
        ))}
      </div>

      {/* Right Button */}
      <button
        className="absolute right-0 z-10 bg-white p-2 md:p-3 shadow-lg rounded-full top-24 transform -translate-y-1/2 flex items-center justify-center"
        onClick={scrollRight}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
      </button>
    </div>
  );
}

export default CategoryCarousel;
