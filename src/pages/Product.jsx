import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

import RelatedProduct from "../components/RelatedProduct";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

function Product() {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext); // assuming `products` is available in context

  const [productData, setProductData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [size, setSize] = useState("");
  const { dispatch ,addToCart } = useCart();
  const navigate = useNavigate()

  const fetchProduct = async () => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      setProductData(product);

      setMainImage(product.image[0]);
    } else {
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId, products]);

  const handleAddToCart = () => {
    if(!size){
      toast.error('Please Select Product Size',{theme:"colored"})
      return
    }
    addToCart(productData._id, productData, size)
    navigate("/cart")
  };

  if (!productData) return <p>Loading...</p>;

  return (
    <div className="border-t border-[#5959596a] pt-10 ">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12  ">
        {/* left thumbnail images desktop */}
        <div className="flex flex-1 flex-col-reverse md:flex-row gap-3 ">
          <div className=" mobile flex flex-row md:flex-col overflow-x-auto sm:overflow-y-scroll justify-center sm:justify-normal gap-3  sm:w-1/5  ">
            {productData.image.map((img, index) => (
              <img
                src={img}
                key={index}
                alt=""
                className="w-[25%] sm:w-full object-cover cursor-pointer rounded-md"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="w-full sm:w-11/12">
            <img src={mainImage} alt="" className="w-full h-auto " />
          </div>
        </div>

        {/* text */}
        <div className="flex-1 text-[#1a1a1a] ">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>
          <div className="flex gap-1 items-center  mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2 text-xs ">(12)</p>
          </div>
          <p className="my-5 font-semibold text-3xl">
            {currency}
            {productData.price}
          </p>
          <p className="text-[#595959] md:w-4/5 ">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={` ${
                    item === size ? "border-[#9C2605] text-[#9C2605] font-semibold scale-105" : ""
                  } border  py-2 px-4 cursor-pointer bg-gray-100`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-5 py-2 text-sm active:bg-gray-700  "
            >
              ADD TO CART
            </button>
         
          <div className="mt-8 text-[#595959] flex flex-col text-sm gap-0.5">
            <hr className=" bg-[#5959596a]  my-3 border-none h-[1px] sm:w-4/5 " />
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* related Products */}

      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
        _id={productData._id}
      />
    </div>
  );
}

export default Product;
