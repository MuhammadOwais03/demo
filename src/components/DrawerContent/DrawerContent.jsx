import React, { useState } from "react";

const categoryData = {
  Clothing: [
    {
      name: "Eastern Ready To Wear",
      subcategories: [
        { name: "Kurta Set", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150" },
        { name: "Maxi", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150" },
        { name: "Pishwas", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150" },
        { name: "Gharara", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150"},
        { name: "Co Ord Sets", image:"https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150" },
        { name: "Sharara", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150" },
        { name: "Lehenga", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150"},
        { name: "Gown", image: "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150" },
      ],
    },
    { name: "Eastern Unstitched", subcategories: [] },
    { name: "Modest Wear", subcategories: [] },
    { name: "Western", subcategories: [] },
    { name: "Fusion", subcategories: [] },
    { name: "Activewear", subcategories: [] },
  ],
  Accessories: [
    {
      name: "Jewelry",
      subcategories: [
        { name: "Necklaces", image: "https://via.placeholder.com/150" },
        { name: "Earrings", image: "https://via.placeholder.com/150" },
        { name: "Bracelets", image: "https://via.placeholder.com/150" },
      ],
    },
    { name: "Handbags", subcategories: [] },
    { name: "Sunglasses", subcategories: [] },
  ],
  Footwear: [
    {
      name: "Women's Footwear",
      subcategories: [
        { name: "Heels", image: "https://via.placeholder.com/150" },
        { name: "Flats", image: "https://via.placeholder.com/150" },
        { name: "Sneakers", image: "https://via.placeholder.com/150" },
      ],
    },
    { name: "Men's Footwear", subcategories: [] },
  ],
  "Lingerie and Sleepwear": [
    {
      name: "Lingerie",
      subcategories: [
        { name: "Bras", image: "https://via.placeholder.com/150" },
        { name: "Panties", image: "https://via.placeholder.com/150" },
      ],
    },
    { name: "Sleepwear", subcategories: [] },
  ],
};

const DrawerContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Clothing");
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-32 bg-gray-100 dark:bg-gray-900 p-2 text-[10px]" style={{ flex: 1 }}>
        <h2 className="font-semibold mb-2">Categories</h2>
        <ul>
          {Object.keys(categoryData).map((category, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer rounded ${selectedCategory === category ? "bg-gray-300" : "hover:bg-gray-200"}`}
              onClick={() => {
                setSelectedCategory(category);
                setOpenCategory(null); // Close the expanded category when switching
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-2" style={{ flex: 2 }}>
        {categoryData[selectedCategory].map((category, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full flex justify-between p-3 text-[12px] hover:bg-gray-200"
              onClick={() => toggleCategory(index)}
            >
              {category.name}
              <span>{openCategory === index ? "▲" : "▼"}</span>
            </button>

            {/* Subcategories Grid */}
            {openCategory === index && category.subcategories.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {category.subcategories.map((sub, subIndex) => (
                  <div key={subIndex} className="text-center">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="w-[150px] h-[120px] object-cover rounded shadow"
                    />
                    <p className="mt-2 text-sm font-medium">{sub.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
