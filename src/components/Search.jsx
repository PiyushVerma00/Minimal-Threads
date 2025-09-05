import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

function Search() {
  const { setIsSearchOpen, searchQuery, setSearchQuery } = useContext(ShopContext);
  const handleCloseSearch = ()=>{
setIsSearchOpen(false)
setSearchQuery("")
  }
  return (
    <div className=" flex justify-center items-center border-t border-[#5959596a] bg-gray-100 text-[#1a1a1a] text-center py-3 pr-3">
      <div className="inline-flex items-center sm:w-1/2 border border-[#5959596a] px-5 py-2 mx-3 rounded-full">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          className=" flex-1 outline-none text-sm text-[#9C2605] w-3/4   bg-transparent  "
        />
        <img src={assets.search_icon} alt="" className="w-5 " />
      </div>
      <button
      onClick={handleCloseSearch }
        aria-label="Close search"
         className=" hover:scale-110 transition-all ease-in-out duration-300"
      >
        <img
          src={assets.close_icon}
          className="w-3"
          alt=""
          
        />
      </button>
    </div>
  );
}

export default Search;
