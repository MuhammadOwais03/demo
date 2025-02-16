import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.jpg";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.jpg";

const products = [
  {
    id: 1,
    name: "M.Prints Spring",
    brand: "Maria B",
    price: "PKR 20000",
    image: w1,
    tag: "Upto 20% Off",
  },
  {
    id: 2,
    name: "AFZ-Summer Together",
    brand: "Afrozeh",
    price: "PKR 20000",
    image: w2,
    tag: "Upto 15% Off",
  },
  {
    id: 3,
    name: "Mahay Spring ",
    brand: "Sana Safinaz",
    price: "PKR 20000",
    image: w3,
    tag: "Upto 40% Off",
  },
  {
    id: 4,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: w4,
    tag: "Upto 5% Off",
  },
  {
    id: 5,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: w5,
    tag: "Upto 5% Off",
  },
  {
    id: 6,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: w6,
    tag: "Upto 5% Off",
  },
  {
    id: 7,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: w7,
    tag: "Upto 5% Off",
  },
  {
    id: 8,
    name: "Dareen Luxury Lawn",
    brand: "Izel",
    price: "PKR 20000",
    image: w8,
    tag: "Upto 5% Off",
  },
];

export default function CardgridWomen() {
  return (
    <>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2 sm:text-3xl ">
          Buy Women's Wear{" "}
        </h2>
        <p className="text-md mb-4 sm:text-lg ">
          Order Now on Express before stock runs out
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white overflow-hidden group transition-shadow duration-300 rounded-lg hover:shadow-lg group-hover:rounded-lg cursor-pointer"
          >
            <span className="absolute bottom-24 left-3 text-red-700 text-md font-semibold px-3 py-1 rounded-md bg-red-100">
              {product.tag}
            </span>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 md:h-80 xl:h-[350px] object-cover rounded-lg group-hover:rounded-none transition-all duration-300"
            />

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
}
