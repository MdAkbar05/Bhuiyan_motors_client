import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProducts } from "../../Features/productSlice";
import { Link, useNavigate } from "react-router-dom";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Group products by their "trend" field
  const groupedProducts = products.reduce((acc, product) => {
    const trend = product.trend || "Others"; // Default category if trend is missing
    if (!acc[trend]) {
      acc[trend] = [];
    }
    acc[trend].push(product);
    return acc;
  }, {});

  const handleCurrentProduct = (id) => {
    dispatch(getProductById(id));
    navigate("/current-product");
  };

  return (
    <div id="products" className="container mx-auto py-8">
      <h2 className="text-2xl text-center font-semibold pt-4 uppercase">
        Our Products
      </h2>
      <p className="text-lg text-center text-lightGray pb-4">
        Explore a World of Choices Across Our Most Popular
      </p>
      {/* Tabs */}
      <div className="flex justify-center gap-4 pb-6">
        {Object.keys(groupedProducts).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeTab === tab
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groupedProducts[activeTab]?.map((product) => (
          <div
            key={product._id}
            onClick={() => handleCurrentProduct(product._id)}
            className="bg-extra rounded-lg shadow-lg p-4 text-center flex flex-col items-center hover:bg-secondary transition-all cursor-pointer"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-40 h-40 mb-4 object-cover p-4 bg-white rounded-lg"
            />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-green-500 text-lg">${product.price}</p>
            <div className="flex items-center gap-2">
              <p className="text-yellow-500">
                {"★".repeat(Math.floor(product.ratings))}{" "}
                <span className="text-gray-300">
                  {"★".repeat(5 - Math.floor(product.ratings))}
                </span>
              </p>
              <p>{parseFloat(product?.ratings.toFixed(1))}</p>
            </div>
            <p className="text-sm text-lightGray mt-2">
              {product.description.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
      {/* Show more button  */}
      <div className="flex justify-center mt-4">
        <Link
          to="/product"
          className="px-4 py-2 text-lightGray border-b-[.5px] hover:bg-primary-dark"
        >
          Explore all
        </Link>
      </div>
    </div>
  );
};

export default OurProducts;
