import { createContext, useState } from "react";
import { products } from "../assets/assets"; 

export const ShopContext = createContext()

function ShopContextProvider({children}){
        const currency = '₹'
        const delivery_fee = 100
       
        const [isSearchOpen, setIsSearchOpen] = useState(false)
        const [searchQuery, setSearchQuery] = useState('')
    return(
        <ShopContext.Provider value={{products,currency,delivery_fee, isSearchOpen,setIsSearchOpen,searchQuery, setSearchQuery}}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider