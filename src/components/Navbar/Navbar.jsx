import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleDropdown = () => {
    console.log("clicked");
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    
      <>
        <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 fixed w-full z-50">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={128}
                height={36}
                viewBox="0 0 158 46"
                fill="#282828"
              >
                <path
                  d="M13.703 19.8939C13.8374 19.6202 13.9942 19.3236 14.1286 19.0498C14.6662 17.9319 15.0023 16.7228 15.0247 15.468C15.0471 14.0991 14.6438 12.8444 13.8822 11.7037C13.2997 10.8595 12.5605 10.2207 11.8212 9.55913C10.6339 8.48686 9.40177 7.46022 8.39368 6.22826C8.05765 5.81761 7.76642 5.36132 7.4976 4.88223C7.11676 4.1978 7.02715 3.44494 7.16157 2.66925C7.31838 1.68825 7.76642 0.844123 8.28167 0C8.28167 0.0684424 8.25927 0.114071 8.25927 0.182513C8.21446 0.958194 8.30407 1.71106 8.70731 2.37267C8.79692 2.50956 8.90893 2.66925 9.02094 2.78333C9.693 3.49056 10.3427 4.22062 11.0147 4.92785C12.0452 6.02293 13.1429 7.07238 14.3078 8.03058C14.7783 8.44123 15.1143 8.94314 15.4503 9.46787C16.1 10.4945 16.436 11.658 16.5032 12.8672C16.5256 13.4147 16.4136 13.9623 16.324 14.5098C16.0776 15.8102 15.5399 17.0194 14.8679 18.1372C14.5318 18.7076 14.1286 19.2551 13.7702 19.8027C13.7702 19.8483 13.7478 19.8711 13.703 19.8939Z"
                  fill="#282828"
                />
                <path
                  d="M14.6223 41.1113C14.1518 38.6018 13.0541 36.4116 11.5084 34.4268C10.7467 33.423 9.87304 32.5104 8.93215 31.6663C8.61852 31.3697 8.3049 31.0503 7.92406 30.845C6.82636 30.1834 5.90788 29.3164 5.12381 28.3126C4.42934 27.4457 3.80209 26.5103 3.15243 25.5749C2.8164 25.0958 2.52517 24.5711 2.23395 24.0692C1.92032 23.476 1.7635 22.8144 1.65149 22.1528C1.47228 21.2174 1.36027 20.2592 1.38267 19.301C1.38267 19.1869 1.44988 19.05 1.49468 18.8904C1.7187 19.1185 1.78591 19.3694 1.85311 19.5976C2.18914 20.6699 2.77159 21.5596 3.62287 22.244C4.33974 22.8144 5.10141 23.3163 5.84067 23.841C6.1991 24.092 6.53513 24.3657 6.89357 24.5483C7.58803 24.9133 8.08087 25.438 8.3945 26.1452C8.48411 26.3734 8.57372 26.6015 8.64093 26.8525C8.66333 26.8069 8.68573 26.784 8.70813 26.7612C9.91784 24.8905 11.0827 22.9969 12.046 20.9893C12.6509 19.7117 13.1885 18.3884 13.435 16.974C13.5694 16.1527 13.5918 15.3313 13.3902 14.51C13.1437 13.5518 12.6061 12.7533 11.9116 12.0689C11.1724 11.3161 10.4107 10.6088 9.64902 9.90158C8.79774 9.10308 7.96886 8.28177 7.2968 7.30076C6.87117 6.66197 6.49033 6.00036 6.31111 5.24749C6.26631 5.06498 6.24391 4.88246 6.22151 4.69995C6.04229 4.95091 5.93028 5.20186 5.79587 5.45282C5.45984 6.16006 5.23582 6.89011 5.21342 7.66579C5.16861 8.66961 5.48224 9.55936 6.06469 10.3579C6.84876 11.4073 7.78965 12.3199 8.66333 13.2781C9.53701 14.2363 10.4107 15.1945 11.2844 16.1755C11.7324 16.6774 12.046 17.2705 12.1804 17.9322C12.2252 18.1147 12.2252 18.2972 12.2252 18.4797C12.2252 18.6394 12.158 18.7763 11.9788 18.7991C11.7324 18.8447 11.486 18.7307 11.3292 18.5253C11.2172 18.3656 11.1051 18.2059 10.9707 18.069C10.1419 17.1793 9.29058 16.2439 8.3945 15.3313C7.58803 14.5328 6.73675 13.78 5.90788 13.0043C5.63905 12.7533 5.34783 12.4796 5.12381 12.183C4.60856 11.4986 4.31733 10.6773 4.07091 9.83313C4.04851 9.85595 4.02611 9.85595 4.00371 9.87876C3.8917 10.0613 3.77969 10.2438 3.66768 10.4263C3.01802 11.5898 2.52517 12.8218 2.09953 14.0994C1.40507 16.1755 0.755413 18.2287 0.464186 20.4189C0.329774 21.5368 0.28497 22.6319 0.39698 23.7269C0.576196 25.2783 1.13625 26.7156 1.92032 28.0388C2.90601 29.7043 4.13812 31.1872 5.50464 32.5332C6.55754 33.5827 7.70004 34.5637 8.95455 35.3393C10.2987 36.1835 11.3516 37.3014 12.2252 38.6246C13.4798 40.541 14.219 42.6855 14.6223 44.9441C14.6447 45.1266 14.6895 45.2863 14.7343 45.4688C14.7791 45.2407 14.8015 45.0354 14.8239 44.8072C14.9135 43.5753 14.8463 42.3433 14.6223 41.1113ZM2.99562 15.2629C3.10763 14.8294 3.26444 14.4188 3.39885 14.0081C3.39885 13.9853 3.42125 13.9853 3.44366 13.9625C3.48846 14.2363 3.53326 14.5328 3.60047 14.7838C3.77969 15.3542 4.13812 15.7876 4.54135 16.1983C5.72866 17.339 6.96077 18.4569 8.14808 19.5976C8.68573 20.1223 9.20098 20.6699 9.69382 21.2402C9.96264 21.5368 10.1643 21.9018 10.1419 22.3125C10.1419 22.5406 9.85063 22.9741 9.62661 23.0425C9.58181 23.0653 9.4698 22.9969 9.425 22.9285C9.31299 22.7459 9.24578 22.5406 9.13377 22.3581C8.82014 21.8106 8.3497 21.4683 7.81205 21.1718C6.53514 20.4417 5.34783 19.5976 4.27253 18.571C3.9365 18.2516 3.57807 17.9093 3.30924 17.5443C2.8612 16.8599 2.794 16.0614 2.99562 15.2629Z"
                  fill="#282828"
                />
                <path
                  d="M33.8276 38.4303V7.40308H35.9334V36.2858H53.0486V38.4303H33.8276Z"
                  fill="#282828"
                />
                <path
                  d="M65.1015 30.5593L61.4948 38.4302H59.1426L73.4799 7.01514L87.0331 38.4302H84.7257L81.2982 30.5593H65.1015ZM73.3903 12.3308L66.0872 28.4148H80.3797L73.3903 12.3308Z"
                  fill="#282828"
                />
                <path
                  d="M97.675 30.5593L94.0683 38.4302H91.7161L106.053 7.01514L119.607 38.4302H117.299L113.872 30.5593H97.675ZM105.964 12.3308L98.6607 28.4148H112.953L105.964 12.3308Z"
                  fill="#282828"
                />
                <path
                  d="M155.561 38.4306V13.9054L142.053 33.5256L128.365 13.8598V38.4306H126.259V7.03833L142.053 29.7612L157.667 7.03833V38.4534H155.561V38.4306Z"
                  fill="#282828"
                />
              </svg>
            </a>
            {/* Search Bar (Hidden on Small Screens) */}
            <div className="hidden md:flex items-center w-1/2">
              <button
                id="dropdown-button"
                data-dropdown-toggle="category-dropdown"
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 bg-gray-100 border border-gray-300 rounded-s-lg px-2.5 py-2.5 text-sm font-medium hover:bg-gray-200 focus:ring-2 focus:ring-gray-200"
              >
                All
                <svg
                  className="w-2.5 h-2.5 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div
                id="category-dropdown"
                className={`z-10 absolute top-14  bg-white divide-y divide-gray-100 rounded-lg shadow-md w-36  ${isDropdownVisible ? "" : "hidden"}`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Men
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Women
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                placeholder="Search fashion"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-e-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Right Side (Search Icon, Currency, Cart) */}
            <div className="flex items-center space-x-6">
              {/* Search Icon (Visible on Small Screens) */}
              <button
                id="mobile-search-button"
                className="md:hidden text-gray-700 cursor-pointer"
                onClick={toggleSearchBar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="1.5em"
                  height="1.5em"
                  fill="currentColor"
                >
                  <g>
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                  </g>
                </svg>
              </button>
              {/* Currency Selector */}
              <div className="flex flex-col">
                <p className="text-gray-500 text-xs">Deliver to / Currency</p>
                <div className="flex items-center gap-2">
                  <img
                    src="https://hatscripts.github.io/circle-flags/flags/pk.svg"
                    width={25}
                    height={25}
                    alt="Flag"
                  />
                  <p className="text-gray-900 text-sm font-semibold">
                    PK / PKR
                  </p>
                </div>
              </div>
              {/* Cart Icon */}
              <div className="relative">
                <a href="#" className="text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    width="1.5em"
                    height="1.5em"
                    fill="currentColor"
                  >
                    <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z" />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    1
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile Search Bar (Initially Hidden) */}
        <div
          id="mobile-search-bar"
          className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-4 ${isSearchVisible ? "" : "hidden"}`}
        >
          <div className="flex justify-between items-center">
            <button id="close-search" className="text-gray-700 cursor-pointer" onClick={toggleSearchBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                fill="currentColor"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4 flex">
            <select className="p-2 w-[60px] border border-gray-300 rounded-l-md bg-gray-100">
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Accessories</option>
            </select>
            <input
              type="text"
              placeholder="Search fashion"
              className="w-full p-2 border border-gray-300 rounded-r-md"
            />
          </div>
        </div>
      </>
    
  );
};

export default Navbar;
