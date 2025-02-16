import React, { useState } from "react";

const FilterBar = () => {
  const [isExpress, setIsExpress] = useState(false);

  return (
    <div className="w-full bg-white p-3 rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 my-4 mt-16">
      {/* Left Section - Attach Icon & Express Toggle */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        {/* Attach Icon */}
        <button className="p-2 border rounded-md border-gray-600 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="24"
            height="24"
            fill="currentColor"
          >
            <g>
              <path d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"></path>
            </g>
          </svg>
        </button>

        {/* Express Toggle */}
        <div className="flex items-center space-x-2 border border-gray-600 p-2 mx-4 rounded-md">
          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-lg">
            ⚡Express
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isExpress}
              onChange={() => setIsExpress(!isExpress)}
            />
            <div className="w-9 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {/* Center Section - Filter Dropdowns with Scrollable Slider */}
      <div className="w-full overflow-x-auto flex-nowrap scrollbar-hide py-2">
        <div className="flex space-x-4">
          {["Fabric", "Price", "Size", "Color", "Brands", "Season", "Occasions"].map(
            (filter, index) => (
              <button
                key={index}
                className="border px-4 py-2 rounded-md flex items-center space-x-1 border-gray-600 hover:bg-gray-100 whitespace-nowrap"
              >
                <span>{filter}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            )
          )}
        </div>
      </div>

      {/* Right Section - Cart Icon */}
      <button className=" hidden md:block p-2 border rounded-md border-gray-600 hover:bg-gray-100 flex-shrink-0">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h14l1 9H4l1-9zm2 9v5a2 2 0 104 0v-5m4 0v5a2 2 0 104 0v-5"></path>
        </svg>
      </button>
    </div>
  );
};

export default FilterBar;