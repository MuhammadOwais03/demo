import React, { useState, useEffect } from "react";

const Sidebar = ({
  toggleDrawer,
  setDrawerOpen,
  drawerOpen,
  setSelectedCategory,
  setSelectedSubCategory,
  selectedCategory
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);

  return (
    <>
      <>
        {/* Sidebar Container */}
        <div
          className=" hidden md:block max-w-[200px] w-full pl-[2rem] pr-[1.5rem] h-screen border-r-[#F2F3F5] bg-white p-4 pt-[7rem] text-sm"
          style={{ borderRight: "2px solid #F2F3F5" }}
        >
          <nav className="flex flex-col justify-between h-full">
            {/* Main Links */}
            <div className="flex flex-col space-y-[1rem]">
              <a href="#" className="block text-gray-900">
                All
              </a>
              {/* Dropdown: Women */}
              <div className="group">
                <button
                  className="flex justify-between w-full text-gray-900"
                  onMouseOver={() => setSelectedCategory("Women")}
                >
                  Women
                  <svg
                    className="w-4 h-4 transform group-hover:rotate-180 transition"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="hidden group-hover:block pl-4 mt-1 space-y-[1rem] pt-2 pb-2">
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Clothing");
                    }}
                  >
                    Clothing
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Footwear");
                    }}
                  >
                    Footwear
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Accessories");
                    }}
                  >
                    Accessories
                  </a>
                </div>
              </div>
              {/* Dropdown: Men */}
              <div id="accordion">
                <button
                  id="menDropdownButton"
                  data-dropdown-toggle="menDropdown"
                  className="flex justify-between w-full text-gray-900"
                  onMouseOver={() => setSelectedCategory("Men")}
                >
                  Men
                  <svg
                    className="w-4 h-4 transition-transform"
                    id="menArrow"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div id="accordion" className="hidden pl-4 mt-1 space-y-1">
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Clothing");
                    }}
                  >
                    Clothing
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Accessories");
                    }}
                  >
                    Accessories
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Footwear");
                    }}
                  >
                    Footwear
                  </a>
                </div>
              </div>
              {/* Dropdown: Kids */}
              <div className="group">
                <button
                  className="flex justify-between w-full text-gray-900"
                  onMouseOver={() => setSelectedCategory("Kids")}
                >
                  Kids
                  <svg
                    className="w-4 h-4 transform group-hover:rotate-180 transition"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="hidden group-hover:block pl-4 mt-1 space-y-[1rem] pt-2 pb-2">
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Boys");
                    }}
                  >
                    Boys
                  </a>
                  <a
                    href="#"
                    className="block text-gray-600"
                    onClick={() => {
                      toggleDrawer(screenWidth);
                      setSelectedSubCategory("Girls");
                    }}
                  >
                    Girls
                  </a>
                </div>
              </div>
              <a href="#" className="block text-gray-900">
                Brands
              </a>
              <a href="#" className="block text-gray-900">
                Top Picks
              </a>
            </div>
            <div className="links flex flex-col space-y-[1rem]">
              <a href="#" className="block text-gray-900">
                Orders
              </a>
              <a href="#" className="block text-gray-900">
                Rewards
              </a>
              <a href="#" className="block text-gray-900">
                Wishlist
              </a>
              <a href="#" className="block text-gray-900">
                Become a Seller
              </a>
              <a href="#" className="block text-gray-900">
                Blogs
              </a>
              <a href="#" className="block text-gray-900">
                Help Center
              </a>
              {/* Bottom: Sign In / Register */}
              <hr className="my-4 border-gray-300" />
              <a href="#" className="block font-semibold text-gray-900">
                Sign In / Register
              </a>
            </div>
          </nav>
        </div>
        {/* Mobile Responsive for sidebar  */}
        <div className="md:hidden fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t left-1/2 border-gray-200  dark:bg-gray-700 dark:border-gray-600 rounded-2xl">
          <div className={` ${drawerOpen?"hidden":"block"} w-full border-b border-gray-200 dark:border-gray-600 rounded-2xl`}>
            <div
              className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-2xl dark:bg-gray-600"
              role="group"
            >
              
              {["Women", "Men", "Kids"].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`py-1.5 text-xs font-medium rounded-lg transition-colors 
            `}
                  // onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <button
              data-tooltip-target="tooltip-home"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
            >
              <svg
                data-v-50dfb386=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={24}
                height={24}
                fill="currentColor"
              >
                <g>
                  <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z" />
                </g>
              </svg>
              <span className="sr-only">Home</span>
              <span data-v-50dfb386="" class="nav-button-text text-[10px]">
                Home
              </span>
            </button>

            <button
              data-tooltip-target="tooltip-bookmark"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
              onClick={() => toggleDrawer(screenWidth)}
            >
              <svg
                data-v-50dfb386=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={24}
                height={24}
                fill="currentColor"
              >
                <g>
                  <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z" />
                </g>
              </svg>
              <span className="sr-only">Category</span>
              <span data-v-50dfb386="" class="nav-button-text text-[10px]">
                Category
              </span>
            </button>

            <button
              data-tooltip-target="tooltip-post"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
              onClick={() => toggleDrawer(screenWidth)}
            >
              <svg
                data-v-50dfb386=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={24}
                height={24}
                fill="currentColor"
              >
                <g>
                  <path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96h0v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm4.93-75.8a8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48v8A24,24,0,0,1,204.93,132.2Z" />
                </g>
              </svg>
              <span className="sr-only">Brand</span>
              <span data-v-50dfb386="" class="nav-button-text text-[10px]">
                Brand
              </span>
            </button>

            <button
              data-tooltip-target="tooltip-search"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
            >
              <svg
                data-v-50dfb386=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width="24"
                height="24"
                fill="currentColor"
              >
                <g>
                  <path d="M223,57a58.07,58.07,0,0,0-81.92-.1L128,69.05,114.91,56.86A58,58,0,0,0,33,139l89.35,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0,0-82Zm-11.35,70.76L128,212.6,44.3,127.68a42,42,0,0,1,59.4-59.4l.2.2,18.65,17.35a8,8,0,0,0,10.9,0L152.1,68.48l.2-.2a42,42,0,1,1,59.36,59.44Z"></path>
                </g>
              </svg>
              <span data-v-50dfb386="" class="nav-button-text text-[10px]">
                Wishlist
              </span>
            </button>

            <button
              data-tooltip-target="tooltip-settings"
              type="button"
              className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
            >
              <svg
                data-v-50dfb386=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={24}
                height={24}
                fill="currentColor"
                className="z-[1]"
              >
                <g>
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z" />
                </g>
              </svg>
              <span className="sr-only">Account</span>
              <span data-v-50dfb386="" class="nav-button-text text-[10px]">
                Account
              </span>
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default Sidebar;
