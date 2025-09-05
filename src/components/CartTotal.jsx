import React, { useContext } from "react";
import Title from "./Title";
import { useCart } from "../context/CartContext";
import { ShopContext } from "../context/ShopContext";

function CartTotal() {
  const { total_items, total_amount, shipping_fee } = useCart();
  const { currency } = useContext(ShopContext);

  return (
    <div className="w-full text-[#1a1a1a]">
      <div className="text-2xl ">
        <Title text1="CART" text2="TOTAL" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>SubTotal</p>
          <p>
            {currency}
            {total_amount}.00
          </p>
        </div>
        <hr className="border-none h-[1px] bg-[#5959596a]" />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency}
            {shipping_fee}.00
          </p>
        </div>
        <hr  className="border-none h-[1px] bg-[#5959596a]" />
        <div className="flex justify-between font-semibold">
          <p>Total</p>
          <p>
            {currency}
            {shipping_fee + total_amount}.00
          </p>
        </div>

         
        
      </div>
    </div>
  );
}

export default CartTotal;
