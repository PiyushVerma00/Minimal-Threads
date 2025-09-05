import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Orders() {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t border-[#5959596a] pt-15 ">
      <div className="text-xl sm:text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />

        <div>
          {products.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="border-t border-b border-[#59595924] py-4  text-[#1a1a1a] flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img className="w-18 sm:28" src={item.image[0]} alt="" />
                <div>
                    <p className="sm:text-base font-medium">{item.name}</p>
                    <div className="flex items-center gap-3 mt-1 text-base">
                        <p>{currency}{item.price}</p>
                        <p>Quantity: 1</p>
                        <p>Size: L</p>
                    </div>
                    <p className="mt-1">Date: <span className="text-[#595959]">18, Aug, 2025</span></p>
                    <p className="mt-1">Payment: <span className="text-[#595959]">COD</span></p>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-500 "></p>
                        <p className="text-sm sm:text-base">Order Placed</p>
                    </div>

                    <button className="text-xs border border-[#5959596a] cursor-pointer py-2 px-4 font-medium rounded-sm ">Track Order</button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
