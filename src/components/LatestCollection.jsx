import React, { useContext, useEffect, useState } from "react";

import Title from "./Title";

import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";
import { motion } from "motion/react";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(-10));
  }, [products]);

  

  return (
    <div className="my-10">
      <motion.div
        className="text-center text-2xl sm:text-3xl py-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 40 }}
         viewport={{once:true}}
      >
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="text-[#595959]  text-xs sm:text-sm md:text-base">
          Uncover the new season’s essentials — premium fabrics, subtle details,
          and silhouettes that speak louder in silence.
        </p>
      </motion.div>

      {/* products grid */}
      <motion.div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Rendering Products */}

        {latestProduct.map((item, index) => (
          <motion.div key={index}
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{type:"spring", stiffness:140,damping:50 , delay:index*0.1}}
          viewport={{once:true,amount:0.1}}
          >
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default LatestCollection;
