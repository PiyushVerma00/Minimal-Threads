import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function RelatedProduct({ category, subCategory, _id }) {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { products } = useContext(ShopContext);
  useEffect(() => {
    if (products.length > 0) {
      let updatedProducts = [...products];

      updatedProducts = updatedProducts.filter(
        (product) => category === product.category
      );
      updatedProducts = updatedProducts.filter(
        (product) => subCategory === product.subCategory
      );
      updatedProducts = updatedProducts.filter(
        (product) => _id !== product._id
      );

      setRelatedProduct(updatedProducts.slice(0, 5));
    }
  }, [products, category, subCategory, _id]);
  return (
    <div className="mt-20">
      <div className="text-2xl sm:text-3xl text-center">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>

      {relatedProduct.length === 0 ? (
        <div className="text-[#9C2605] my-20 text-xl text-center font-medium">
          No Related Products Found
        </div>
      ) : (
        <div
          className={` ${
            relatedProduct.length < 4
              ? "flex justify-center gap-4 flex-wrap"
              : "grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          }   `}
        >
          {relatedProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default RelatedProduct;
