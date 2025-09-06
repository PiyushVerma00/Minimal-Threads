import React, { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [method, setMethod] = useState("cod");
  const navigate  = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/orders')
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-between gap-4  border-t border-[#5959596a] pt-10">
      {/* left side */}
      <div className="flex flex-col w-full sm:max-w-[480px] gap-4">
        <div className=" text-xl sm:text-2xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First name"
            className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
          />
          <input
            type="text"
            placeholder="Last name"
            className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
          />
        </div>
        <input
          type="email"
          placeholder="Email address"
          className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded"
          required
        />
        <input
          type="text"
          placeholder="Street"
          className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
          required
        />

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
            required
          />
          <input
            type="text"
            placeholder="State"
            className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Zipcode"
            className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
            required
          />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          pattern="[0-9]{10}"
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-digits
          }}
          maxLength={10}
          className="py-1.5 px-3.5 border border-[#5959596a] w-full rounded "
          required
        />
      </div>

      {/* right side */}

      <div className="mt-8">
        <div className="min-w-80 mt-8  ">
          <CartTotal />
        </div>
        <div className="text-lg mt-10">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border border-[#5959596a]  py-2 px-3 cursor-pointer ${method==="stripe" ? 'shadow':''}`}
            >
              <p
                className={`min-w-3.5 h-3.5 border border-[#5959596a] rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                } `}
              ></p>
              <img src={assets.stripe_icon} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
               className={`flex items-center gap-3 border border-[#5959596a]  py-2 px-3 cursor-pointer ${method==="razorpay" ? 'shadow':''}`}
            >
              <p
                className={`min-w-3.5 h-3.5 border border-[#5959596a] rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                } `}
              ></p>
              <img src={assets.razorpay_icon} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border border-[#5959596a]  py-2 px-3 cursor-pointer ${method==="cod" ? 'shadow':''}`}
            >
              <p
                className={`min-w-3.5 h-3.5 border border-[#5959596a] rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                } `}
              ></p>
              <p className="text-[#595959] uppercase text-sm">
                Cash On Delivery
              </p>
            </div>
          </div>
          <div className=" w-full text-end mt-5">
            <button type="submit" className=" text-sm text-white bg-[#9C2605] px-12 py-3 rounded-md hover:scale-110 transition-all ease-in-out durantion-500 hover:bg-[#862408] ">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;