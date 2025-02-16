import React from "react";
import m1 from "../assets/men1.png"
import m2 from "../assets/men2.png"
const products = [
  {
    id: 1,
    title: "KAMEEZ SHALWAR",
    image:  m2,
  },
  {
    id: 2,
    title: "KURTA",
    image:  m1,
  },
];

const ProductCard = ({ title, image }) => {
  return (
    <div className="relative group">
      <img
        src={image}
        alt={title}
        className="w-full h-60 sm:h-auto object-fill cursor-pointer shadow-lg transition-transform transform "
      />
     
      
    </div>
  );
};

const MenCat = () => {
  return (
    <div className="container mx-auto  pt-10">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} title={product.title} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default MenCat;
