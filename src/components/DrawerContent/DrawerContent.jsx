import React, { useEffect, useState } from "react";

const DrawerContent = ({ categoryData, openCategory, setOpenCategory, selectedCategoryName, setSelectedCategoryName }) => {
  // const [selectedCategoryName, setSelectedCategoryName] = useState("Clothing");
  // const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  useEffect(() => {
    console.log(selectedCategoryName, categoryData);
  }, [selectedCategoryName, openCategory]);

  
  if (!categoryData || categoryData.length === 0) {
    return <div className="flex justify-center items-center mt-8">Please Select The Category</div>; 
  }
  // Find the selected category object
  const selectedCategory = categoryData.find(
    (category) => category.name === selectedCategoryName
  );

  console.log(selectedCategory);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div
        className="w-32 p-2 text-[10px]"
        style={{ flex: 1, height: "100vh" }}
      >
        <h2 className="font-semibold mb-2">Categories</h2>
        <ul>
          {categoryData.map((category, index) => (
            <li
              key={index}
              className={`p-2 cursor-pointer rounded ${
                selectedCategoryName === category.name
                  ? "bg-gray-300"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => {
                setSelectedCategoryName(category.name);
                setOpenCategory(null); // Close the expanded category when switching
              }}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-2" style={{ flex: 2 }}>
        {selectedCategory ? (
          selectedCategory.subcategories.map((subcategory, index) => (
            <div key={index} className="border-b">
              <button
                className="w-full flex justify-between p-3 text-[12px] hover:bg-gray-200"
                onClick={() => toggleCategory(index)}
              >
                {subcategory.name}
                <span>{openCategory === index ? "▲" : "▼"}</span>
              </button>

              {/* Subcategories Grid */}
              {openCategory === index && subcategory.products?.length > 0 && (
                <div className="flex flex-wrap gap-4 p-2 flex-row justify-center">
                  {subcategory.products.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-center w-[100px] cursor-pointer"
                    >
                      <img
                        src={sub.image}
                        alt={sub.name}
                        className="w-[100px] h-[120px] object-cover rounded shadow"
                      />
                      <p className="mt-2 text-sm font-medium">{sub.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 p-4">
            Select a category to see the items
          </div>
        )}
      </div>
    </div>
  );
};

export default DrawerContent;
