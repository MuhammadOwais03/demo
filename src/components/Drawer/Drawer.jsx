import React, { useState, useEffect } from "react";
import DrawerContent from "../DrawerContent/DrawerContent";

const Drawer = ({toggleDrawer}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [leftPosition, setLeftPosition] = useState("left-0");

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup event listener
  }, []);


  useEffect(() => {

    const drawer = document.getElementById("drawer-disabled-backdrop");
    if (drawer.style.transform === "translateX(180%)" || drawer.style.transform === "translateX(100%)") { 
        
        drawer.style.transform = "translateX(-100%)";
        return;
      }
      if (screenWidth < 768) {
        console.log(screenWidth, "idk")
      setLeftPosition("left-0");
      

    }
    
        

  }, [screenWidth]);

//   const toggleDrawer = () => {
//     const drawer = document.getElementById("drawer-disabled-backdrop");
//     if (!drawer) return;

//     if (screenWidth > 768) {
//         if (drawer.style.transform === "translateX(200px)") {
//           console.log("closing drawer");
//           drawer.style.transform = "translateX(-100%)";
//         } else {
//           console.log("opening drawer");
//           drawer.style.transform = "translateX(200px)";
//         }
//     } else {
//         if (drawer.style.transform === "translateX(0px)") {
//             console.log("closing drawer");
//             drawer.style.transform = "translateX(-100%)";
//         } else {
//             console.log("opening drawer");
//             drawer.style.transform = "translateX(0px)";
//         }
//     }
//   };

  return (
    <>
      <>
        
        {/* drawer component */}
        <div
          id="drawer-disabled-backdrop"
          className={`fixed top-0 ${leftPosition} z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-full md:w-64 dark:bg-gray-800 pt-[7rem]`}
          tabIndex={-1}
          aria-labelledby="drawer-disabled-backdrop-label"
        >
          
          <button
            type="button"
            data-drawer-hide="drawer-disabled-backdrop"
            aria-controls="drawer-disabled-backdrop"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-15 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white "
            onClick={()=>toggleDrawer(screenWidth)}
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
          <DrawerContent />
        </div>
      </>
    </>
  );
};

export default Drawer;
