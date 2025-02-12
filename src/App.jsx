import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Drawer from "./components/Drawer/Drawer";


const categoryData = {
  Women: [
    {
      name: "Clothing",
      subcategories: [
        {
          name: "Eastern Ready To Wear",
          image: "https://via.placeholder.com/150",
          products: [
            {
              name: "Kurta Set",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Maxi",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Pishwas",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Gharara",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Co Ord Sets",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Sharara",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Lehenga",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
            {
              name: "Gown",
              image:
                "https://cdn.shopify.com/s/files/1/2337/7003/files/Kurta_set_f76b388d-3caf-4534-81bf-55ac3e8c7811.png?v=1706940295&width=150",
            },
          ],
        },
        {
          name: "Eastern Unstitched",
          image: "https://via.placeholder.com/150",
        },
        { name: "Modest Wear", image: "https://via.placeholder.com/150", products:[] },
        { name: "Western", image: "https://via.placeholder.com/150", products:[] },
        { name: "Fusion", image: "https://via.placeholder.com/150", products:[] },
        { name: "Activewear", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
    {
      name: "Accessories",
      subcategories: [
        { name: "Jewelry", image: "https://via.placeholder.com/150", products:[] },
        { name: "Handbags", image: "https://via.placeholder.com/150", products:[] },
        { name: "Sunglasses", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
    {
      name: "Footwear",
      subcategories: [
        { name: "Heels", image: "https://via.placeholder.com/150", products:[] },
        { name: "Flats", image: "https://via.placeholder.com/150", products:[] },
        { name: "Sneakers", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
    {
      name: "Lingerie and Sleepwear",
      subcategories: [
        { name: "Lingerie", image: "https://via.placeholder.com/150", products:[] },
        { name: "Sleepwear", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
  ],
  Men: [
    {
      name: "Clothing",
      subcategories: [
        { name: "Eastern Wear", image: "https://via.placeholder.com/150", products:[] },
        { name: "Western Wear", image: "https://via.placeholder.com/150", products:[] },
        { name: "Activewear", image: "https://via.placeholder.com/150", products:[] },
        { name: "Formal Wear", image: "https://via.placeholder.com/150", products:[] },
        { name: "Casual Wear", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
    {
      name: "Accessories",
      subcategories: [
        { name: "Watches", image: "https://via.placeholder.com/150", products:[] },
        { name: "Wallets", image: "https://via.placeholder.com/150", products:[] },
        { name: "Sunglasses", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
    {
      name: "Footwear",
      subcategories: [
        { name: "Formal Shoes", image: "https://via.placeholder.com/150", products:[] },
        { name: "Sneakers", image: "https://via.placeholder.com/150", products:[] },
        { name: "Loafers", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
  ],
  Kids: [
    {
      name: "Girls",
      subcategories: [
        { name: "Dresses", image: "https://via.placeholder.com/150", products:[] },
        { name: "Tops", image: "https://via.placeholder.com/150", products:[] },
        { name: "Skirts", image: "https://via.placeholder.com/150", products:[] },
        { name: "Shoes", image: "https://via.placeholder.com/150", products:[] },
        { name: "Accessories", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
    {
      name: "Boys",
      subcategories: [
        { name: "T-Shirts", image: "https://via.placeholder.com/150", products:[] },
        { name: "Jeans", image: "https://via.placeholder.com/150", products:[] },
        { name: "Shorts", image: "https://via.placeholder.com/150", products:[] },
        { name: "Shoes", image: "https://via.placeholder.com/150", products:[] },
        { name: "Accessories", image: "https://via.placeholder.com/150", products:[] },
      ],
    },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("")
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("")
  
  const [dataToDrawer, setDataToDrawer] = useState([]);

  useEffect(() => {
    console.log(selectedCategory);
    
    setDataToDrawer(categoryData[selectedCategory])
    if (selectedSubCategory) {
      const categoryIndex = categoryData[selectedCategory]?.findIndex((item) => item.name === selectedSubCategory);
      console.log(categoryData[selectedCategory][categoryIndex])
      setSelectedCategoryName(categoryData[selectedCategory][categoryIndex].name)
      if (categoryIndex !== -1) {
        setOpenCategory(categoryIndex)
        console.log(selectedSubCategory, categoryData[selectedCategory][categoryIndex], categoryIndex);
      } else {
        console.log("Subcategory not found");
      }
    }
  
    // setDataToDrawer(categoryData[selectedCategory][selectedSubCategory]);
  }, [selectedCategory, selectedSubCategory]);

  useEffect(()=>{
    console.log(selectedCategoryName)
  },[selectedCategoryName])
  

  useEffect(() => {
    console.log(dataToDrawer);
  }, [dataToDrawer]);

  const closeDrawer = () => {
    const drawer = document.getElementById("drawer-disabled-backdrop");
    setDrawerOpen(false)
    if (!drawer) return;
    console.log("closing drawer");
    drawer.style.transform = "translateX(-100%)";
    
  };

  const toggleDrawer = (screenWidth) => {
    console.log("Hello", screenWidth);
    const drawer = document.getElementById("drawer-disabled-backdrop");
    if (!drawer) return;
    setDrawerOpen(true)
    if (screenWidth > 768) {
      if (drawer.style.transform === "translateX(120%)") {
        // console.log("closing drawer");
        // drawer.style.transform = "translateX(-100%)";
      } else {
        console.log("opening drawer");
        drawer.style.transform = "translateX(120%)";
      }
    } else {
      console.log("Hello", drawer.style.transform);

      if (drawer.style.transform === "translateX(100%)") {
        // console.log("closing drawer");
        // drawer.style.transform = "translateX(-100%)";
      } else {
        console.log("opening drawer");
        drawer.style.transform = "translateX(100%)";
      }
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar
        toggleDrawer={toggleDrawer}
        setDrawerOpen={setDrawerOpen}
        drawerOpen={drawerOpen}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubCategory={setSelectedSubCategory}
        selectedCategory={selectedCategory}
        
      />
      <Drawer
        toggleDrawer={toggleDrawer}
        closeDrawer={closeDrawer}
        dataToDrawer={dataToDrawer}
        openCategory={openCategory}
        setOpenCategory={setOpenCategory}
        selectedCategoryName={selectedCategoryName}
        setSelectedCategoryName={setSelectedCategoryName}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

export default App;
