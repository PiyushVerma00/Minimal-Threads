import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";

import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { motion } from "motion/react";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestSellerProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestSellerProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <motion.div
        className="text-center text-3xl py-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 40 }}
        viewport={{ once: true }}
      >
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="text-[#595959]  text-xs sm:text-sm md:text-base">
          Celebrate timeless favorites — refined craftsmanship, effortless
          design, and pieces that define understated luxury.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Rednering Products */}

        {bestSeller.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 50,
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
