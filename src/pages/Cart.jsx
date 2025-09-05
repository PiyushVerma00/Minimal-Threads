import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Plus, Minus } from "lucide-react";
import CartTotal from "../components/CartTotal";


function Cart() {
  const navigate = useNavigate()
  const {
    cart,
    total_amount,
    total_items,
    shipping_fee,
    removeCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const { currency } = useContext(ShopContext);


  return (
    <div className="border-t border-[#5959596a] pt-15">
      {cart.length === 0 ? (
        <div className="text-center p-10 text-[#1a1a1a]">
          <h2 className="font-medium text-xl">Your Cart is Empty</h2>
          <Link
            to="/collection"
            className="bg-[#9C2605] py-2 px-4 my-5 w-fit rounded-md text-white hover:scale-110 hover:bg-[#862408] transition-all ease-in-out duration-300 mx-auto block"
          >
            Explore Shop
          </Link>
        </div>
      ) : (
        <div>
          <div className="text-2xl sm:text-3xl">
            <Title text1="YOUR" text2="CART" />
          </div>

          {cart.map((item, index) => (
            <div
              key={index}
              className=" border-t border-b border-[#59595924] py-4  text-[#1a1a1a]"
            >
              <div className="grid grid-cols-[4fr_1.2fr_0.4fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center">
                <div className="flex gap-6 items-start ">
                  <img src={item.image[0]} className="w-18 sm:w-24" alt="" />
                  <div>
                    <h4 className="text-xs sm:text-lg font-medium">
                      {item.name}
                    </h4>
                    <div className="flex items-center mt-4 gap-4">
                      <p>
                        {currency}
                        {item.price}
                      </p>
                      <p className="border border-[#5959596a] px-2 sm:py-1 sm:px-3 bg-orange-100">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button onClick={() => decreaseQuantity(item.id, item.size)}>
                    <Minus className="w-4 h-4 bg-orange-100 " />
                  </button>
                  <span className="text-md font-medium">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id, item.size)}>
                    <Plus className="w-4 h-4 bg-orange-100 " />
                  </button>
                </div>
                <img
                  src={assets.bin_icon}
                  className="w-4 sm:w-5 cursor-pointer"
                  onClick={() => removeCart(item.id, item.size)}
                  alt=""
                />
              </div>
            </div>
          ))}

          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[450px]">
               <CartTotal />
             <div className="w-full text-end">
            <button onClick={()=>navigate('/PlaceOrder')} className="bg-[#9C2605] uppercase  text-white text-sm my-8 px-12 py-3 rounded-sm hover:scale-110 transition-all ease-in-out hover:bg-[#862408]duration-500">Proceed To Checkout</button>
          </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
