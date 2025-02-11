import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Drawer from "./components/Drawer/Drawer";

function App() {
  const [count, setCount] = useState(0);

  const toggleDrawer = (screenWidth) => {
    console.log("Hello", screenWidth)
    const drawer = document.getElementById("drawer-disabled-backdrop");
    if (!drawer) return;

    if (screenWidth > 768) {
        if (drawer.style.transform === "translateX(180%)") {
          console.log("closing drawer");
          drawer.style.transform = "translateX(-100%)";
        } else {
          console.log("opening drawer");
          drawer.style.transform = "translateX(180%)";
        }
    } else {

      console.log("Hello", drawer.style.transform)
      
        if (drawer.style.transform === "translateX(100%)") {
            console.log("closing drawer");
            drawer.style.transform = "translateX(-100%)";
        } else {
            console.log("opening drawer");
            drawer.style.transform = "translateX(100%)";
        }
    }
  };

  return (
    <>
     <Navbar />
      <Sidebar toggleDrawer={toggleDrawer} />
      <Drawer toggleDrawer={toggleDrawer} />
    </>
  );
}

export default App;
