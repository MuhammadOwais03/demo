import React, { useState, useEffect } from "react";
import DrawerContent from "../DrawerContent/DrawerContent";

const Drawer = ({
  toggleDrawer,
  closeDrawer,
  dataToDrawer,
  openCategory,
  setOpenCategory,
  selectedCategoryName,
  setSelectedCategoryName,
  setSelectedCategory,
  selectedCategory
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [leftPosition, setLeftPosition] = useState("left-0");

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  useEffect(() => {
    const drawer = document.getElementById("drawer-disabled-backdrop");
    if (
      drawer.style.transform === "translateX(120%)" ||
      drawer.style.transform === "translateX(100%)"
    ) {
      drawer.style.transform = "translateX(-100%)";
      return;
    }
    if (screenWidth < 768) {
      console.log(screenWidth, "idk");
      setLeftPosition("left-0");
    }
  }, [screenWidth]);

  

  return (
    <>
      <>
        {/* drawer component */}
        <div
          id="drawer-disabled-backdrop"
          className={` fixed top-0 ${leftPosition} z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full  w-full md:w-[700px] bg-white dark:bg-gray-800 pt-[7rem]`}
          tabIndex={-1}
          aria-labelledby="drawer-disabled-backdrop-label"
        >
          <div class="fixed md:hidden top-14 z-50 w-full h-16 max-w-lg -translate-x-1/2  bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex flex-row gap-5 justify-center items-center h-full max-w-lg grid-cols-5 mx-auto">
              
              
              {["Women", "Men", "Kids"].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`inline-flex flex-col items-center justify-center px-3  hover:bg-gray-50 dark:hover:bg-gray-800 group text-sm
            ${
              selectedCategory === category
                ? "border-b-2"
                : "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
            }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
              
              
            </div>
          </div>

          <button
            type="button"
            data-drawer-hide="drawer-disabled-backdrop"
            aria-controls="drawer-disabled-backdrop"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-15 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white "
            onClick={() => closeDrawer()}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <DrawerContent
            categoryData={dataToDrawer}
            openCategory={openCategory}
            setOpenCategory={setOpenCategory}
            selectedCategoryName={selectedCategoryName}
            setSelectedCategoryName={setSelectedCategoryName}
          />
        </div>
      </>
    </>
  );
};

export default Drawer;
