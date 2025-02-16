import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
import m8 from "../assets/m8.jpg";

const products = [
  {
    id: 1,
    name: "M.Prints Spring ",
    brand: "Maria B",
    price: "PKR 20000",
    image: m1,
    tag: "Upto 20% Off",
  },
  {
    id: 2,
    name: "AFZ-Summer ",
    brand: "Afrozeh",
    price: "PKR 20000",
    image: m2,
    tag: "Upto 15% Off",
  },
  {
    id: 3,
    name: "Mahay Spring",
    brand: "Sana Safinaz",
    price: "PKR 20000",
    image: m3,
    tag: "Upto 40% Off",
  },
  {
    id: 4,
    name: "Dareen Luxury Lawn ",
    brand: "Izel",
    price: "PKR 20000",
    image: m4,
    tag: "Upto 5% Off",
  },
  {
    id: 5,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: m5,
    tag: "Upto 5% Off",
  },
  {
    id: 6,
    name: "Dareen Luxury Lawn ",
    brand: "Izel",
    price: "PKR 20000",
    image: m6,
    tag: "Upto 5% Off",
  },
  {
    id: 7,
    name: "Dareen Luxury Lawn ",
    brand: "Izel",
    price: "PKR 20000",
    image: m7,
    tag: "Upto 5% Off",
  },
  {
    id: 8,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: m8,
    tag: "Upto 5% Off",
  },
];

const CardGrid = () => {
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold mb-2 sm:text-3xl">
          Buy Men's Wear
        </h2>
        <p className="text-md mb-4 sm:text-lg">
          Order Now on Express before stock runs out
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white overflow-hidden group transition-shadow duration-300 rounded-lg hover:shadow-lg cursor-pointer"
          >
            <span className="absolute bottom-24 left-3 text-red-700 text-md font-semibold px-3 py-1 rounded-md bg-red-100">
              {product.tag}
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 md:h-80 xl:h-[350px] object-cover rounded-lg transition-all duration-300"
            />

            {/* Icons Section */}
            <div className="absolute top-4 right-4 sm:right-[-50px] sm:group-hover:right-4 flex flex-col gap-2 transition-all duration-300">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
            </div>

            <div className="p-4">
              <p className="text-md sm:text-lg text-red-600">{product.price}</p>
              <h2 className="text-sm font-semibold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
