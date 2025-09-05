import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { animate, motion } from "motion/react";

const Collection = () => {
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const childVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const { products, isSearchOpen, searchQuery, setSearchQuery } =
    useContext(ShopContext);

  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // dropDown states
  const [topwearDropdown, setTopwearDropdown] = useState(false);
  const [bottomwearDropdown, setBottomwearDropdown] = useState(false);
  const [winterwearDropdown, setWinterwearDropdown] = useState(false);

  // store which filter are selected
  const [selectedFilter, setSelectedFilter] = useState([]);

  // filtered Products state
  const [displayProducts, setDisplayProducts] = useState(products);

  // storing relavent, high-low, low-high
  const [sortOption, setSortOption] = useState("relevant");

  const handleFilterChange = (subCategory) => {
    setSelectedFilter((prev) =>
      prev.includes(subCategory)
        ? prev.filter((item) => item !== subCategory)
        : [...prev, subCategory]
    );
  };

  // whenever products and filter state change it will update
  useEffect(() => {
    let upatedProducts = [...products];

    if (selectedFilter.length > 0) {
      upatedProducts = upatedProducts.filter((product) =>
        selectedFilter.includes(product.subCategory)
      );
    }

    if (sortOption === "low-high") {
      upatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      upatedProducts.sort((a, b) => b.price - a.price);
    }

    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      upatedProducts = upatedProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.subCategory.toLowerCase().includes(lowerQuery)
      );
    }

    setDisplayProducts(upatedProducts);
  }, [selectedFilter, products, sortOption, searchQuery]);

  return (
    <>
      {isSearchOpen && (
        <div>
          <Search />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-1 pt-10 border-t border-[#5959596a] text-[#1a1a1a] sm:gap-10">
        {/* filter Options - left section */}

        <div className="min-w-60 ">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, ease: "easeInOut", delay: 0.2 },
            }}
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className=" group flex gap-1 cursor-pointer my-2 items-center text-xl"
          >
            FILTERS{" "}
            <img className="h-3" src={assets.filter_icon} alt="filter-icon" />
          </motion.p>

          {/* category  */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, ease: "easeInOut", delay: 0.4 },
            }}
            className={`border border-[#5959596a]  pl-5 py-3 mt-6 ${
              isFilterVisible ? "" : "hidden"
            } sm:block `}
          >
            <p className="text-md font-medium mb-3 ">CATEGORIES</p>
            <div className="mb-2">
              <button
                onClick={() => setTopwearDropdown(!topwearDropdown)}
                className="flex gap-2 items-center w-full text-base mb-1 transition-all  duration-150"
              >
                Topwear{" "}
                <img
                  className={`h-2 w-3 transition-transform ${
                    topwearDropdown ? "rotate-180" : "rotate-0"
                  }`}
                  src={assets.dropdown_icon}
                  alt=""
                />
              </button>
              {topwearDropdown && (
                <div className="flex flex-col gap-2  text-[#595959] text-sm ">
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("T-Shirt")}
                      onChange={() => handleFilterChange("T-Shirt")}
                    />
                    Relax-fit T-Shirt
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Oversize_T-shirt")}
                      onChange={() => handleFilterChange("Oversize_T-shirt")}
                    />
                    Oversize T-Shirt
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Shirt")}
                      onChange={() => handleFilterChange("Shirt")}
                    />
                    Shirts
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Polo")}
                      onChange={() => handleFilterChange("Polo")}
                    />
                    Polos
                  </label>
                </div>
              )}
            </div>
            <div className="mb-2">
              <button
                onClick={() => setBottomwearDropdown(!bottomwearDropdown)}
                className="flex gap-2 items-center w-full text-base mb-1 transition-all  duration-150"
              >
                Bottomwear{" "}
                <img
                  className={`h-2 w-3 transition-transform ${
                    bottomwearDropdown ? "rotate-180" : "rotate-0"
                  }`}
                  src={assets.dropdown_icon}
                  alt=""
                />
              </button>
              {bottomwearDropdown && (
                <div className="flex flex-col gap-2 text-[#595959] text-sm ">
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Trouser")}
                      onChange={() => handleFilterChange("Trouser")}
                    />
                    Trousers
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Chinos")}
                      onChange={() => handleFilterChange("Chinos")}
                    />
                    Relaxed Chinos
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Joggers")}
                      onChange={() => handleFilterChange("Joggers")}
                    />
                    Cargo & Joggers
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Pant")}
                      onChange={() => handleFilterChange("Pant")}
                    />
                    Pants
                  </label>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setWinterwearDropdown(!winterwearDropdown)}
                className="flex gap-2 items-center w-full text-base mb-1 transition-all  duration-150"
              >
                Winterwear{" "}
                <img
                  className={`h-2 w-3 transition-transform ${
                    winterwearDropdown ? "rotate-180" : "rotate-0"
                  }`}
                  src={assets.dropdown_icon}
                  alt=""
                />
              </button>
              {winterwearDropdown && (
                <div className="flex flex-col gap-2 text-[#595959] text-sm ">
                  <label className="flex gap-2">
                    {" "}
                    <input
                      onChange={() => handleFilterChange("Jacket")}
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      checked={selectedFilter.includes("Jacket")}
                      id=""
                    />
                    Jacket
                  </label>
                  <label className="flex gap-2">
                    {" "}
                    <input
                      onChange={() => handleFilterChange("Sweater")}
                      checked={selectedFilter.includes("Sweater")}
                      className="accent-[#9C2605] w-3"
                      type="checkbox"
                      id=""
                    />
                    Sweater
                  </label>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* right section */}

        <div className="flex-1">
          <div className="flex justify-between items-center text-lg   md:text-xl lg:text-2xl mb-4">
            <Title text1="ALL" text2="COLLECTION" />
            <select
              className="border w-1/3  text-wrap  border-[#5959596a] text-xs sm:text-sm px-2 py-3 bg-transparent  cursor-pointer focus:outline-none focus:ring-0"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="relavent">Sort By: Relavent</option>
              <option value="low-high">Sort By: Price Low To High</option>
              <option value="high-low">Sort By: Price High To Low</option>
            </select>
          </div>
          {/* map Prodcuts */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {displayProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }}
                viewport={{ once: true}}
              >
                <ProductItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  ini
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
