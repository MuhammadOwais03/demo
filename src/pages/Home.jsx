import React from "react";

import CardGrid from "../components/Cardgrid";
import Footer from "../components/Footer";
import MenCat from "../components/MenCat";
import CardgridWomen from "../components/CardgridWomen.jsx";
import BannerCaruosel from "../components/BannerCaruosel.jsx";

import e1 from "../assets/e1.png";
import CategoryCarousel from "../components/CategoryCarousel.jsx";
import ShopCarousel from "../components/ShopCarousel.jsx";
import FilterBar from "../components/FilterBar.jsx";

export default function Home() {
  return (
    <>
    <div className="lg:p-20 lg:ml-68 md:ml-0 sm:ml-0 pt-20">
        <BannerCaruosel />
    </div>
      <div className="lg:p-20 p-4 lg:ml-68 md:ml-0 sm:ml-0">
        <CardgridWomen />
        <CategoryCarousel type="Accesaries" />
        <a
          rel="noopener noreferrer"
          as="button"
          disabled="false"
          class="block w-full py-10  md:py-12 lg:rounded-3xl"
        >
          <img
            src={e1}
            loading="eager"
            data-nuxt-img=""
            class="w-full lazy_image homepage__image-slider-image homepage__image-slider-image rounded-lg lg:rounded-3xl"
          />
        </a>
        <ShopCarousel/>
        <CardGrid />
        <MenCat />
        <FilterBar/>
        <ShopCarousel/>
        
      </div>
      <div className="lg:ml-62 md:ml-0 sm:ml-0 p-4 mb-28 sm:mb-0">
        <Footer />
      </div>
    </>
  );
}
