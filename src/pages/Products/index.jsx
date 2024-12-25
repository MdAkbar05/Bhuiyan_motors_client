import React, { useEffect, useState } from "react";
import HelmetPage from "../../components/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProducts } from "../../Features/productSlice";
import ProductsLoading from "../../components/Skeleton/ProductsLoading";
import { addToCart } from "../../Features/cartSlice";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading } = useSelector((state) => state.products);

  const [sortOrder, setSortOrder] = useState("asc");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  let categories = [...new Set(products.map((product) => product.category))];
  categories = categories.concat("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const location = useLocation(); // Hook to access location
  const params = new URLSearchParams(location.search);
  const [selectedCategory, setSelectedCategory] = useState("");

  React.useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSortChange = (e) => setSortOrder(e.target.value);
  const handlePriceChange = (e) => setPriceRange([0, e.target.value]);

  useEffect(() => {
    setSelectedCategory(params.get("category"));
    setFilteredProducts(
      products
        ?.filter(
          (product) =>
            !selectedCategory || product.category === selectedCategory
        )
        .filter(
          (product) =>
            product.price >= priceRange[0] && product.price <= priceRange[1]
        )
        .sort((a, b) =>
          sortOrder === "asc" ? a.price - b.price : b.price - a.price
        )
    );
  }, [navigate, location, handleSortChange, handlePriceChange, params]);

  const handleCurrentProductCategory = (category) => {
    setSelectedCategory(category == "All" ? "" : category);
    navigate(`/product?category=${category}`);
  };

  const handleCurrentProduct = (id) => {
    dispatch(getProductById(id));
    navigate("/current-product");
  };

  return (
    <>
      <HelmetPage
        title="Products Page | E-commerce"
        desc="Find the best parts for your vehicle."
      />
      <div className="container mx-auto p-4 flex  ">
        {/* Sidebar */}
        <aside className="w-40 pt-4 border-r border-secondary">
          <h2 className="font-semibold text-white mb-3 uppercase">
            Categories
          </h2>
          <ul className="space-y-2">
            {categories?.map((category) => (
              <li
                key={category}
                className={`cursor-pointer bg-extra p-1 rounded-lg ${
                  selectedCategory === category
                    ? "font-semibold  text-primary "
                    : "text-gray-50 "
                }`}
                onClick={() => {
                  handleCurrentProductCategory(category);
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full p-4 ">
          <div className="flex justify-between items-center mb-4">
            {/* Sort by */}
            <div>
              <label className="mr-2 font-semibold text-white">Sort by:</label>
              <select
                value={sortOrder}
                onChange={handleSortChange}
                className="border border-gray-300 rounded p-1 text-black"
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
            {/* Price Range */}
            <div className="flex items-center">
              <label className="mr-2 font-semibold text-white">
                Max Price:
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-32"
              />
              <span className="ml-2 text-white">${priceRange[1]}</span>
            </div>
          </div>

          {/* Products List */}
          {isLoading && <ProductsLoading />}
          {!isLoading && (
            <div className="flex justify-start items-start flex-wrap gap-2  w-full h-[750px] overflow-y-scroll">
              {filteredProducts?.map((product) => (
                <div
                  key={product._id}
                  className="border px-3 py-2 rounded-lg shadow-md hover:shadow-lg bg-white flex flex-col justify-between items-start md:w-64 sm:6/12 h-72"
                >
                  <div
                    className="h-32 mx-auto cursor-pointer"
                    onClick={() => handleCurrentProduct(product._id)}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="lg:size-32 md:size-28 sm:size-22 object-cover mb-4 rounded-lg shadow-sm mx-auto"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold text-secondary">
                      {product.name.substring(0, 20)}...
                    </h2>

                    <p className="text-gray-500 text-sm mb-1">
                      Brand: {product.brand}
                    </p>
                    <p className="text-gray-500 text-sm mb-1">
                      Category: {product.category}
                    </p>
                    <p
                      className={`text-sm ${
                        product.inStock ? "text-green-500" : "text-red-500"
                      } mb-1`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <div className="flex items-center  justify-between w-full">
                    <div className="flex gap2">
                      <span className="text-xl font-bold text-primary">
                        ${product.price}
                      </span>
                      <span className="ml-2 text-yellow-500">
                        ⭐ {parseFloat(product?.ratings.toFixed(1))}
                      </span>
                    </div>
                    {/* Add to cart button  */}
                    <button
                      onClick={() => {
                        dispatch(addToCart(product, product._id));
                        toast.success(`${product.name} added successfully`);
                      }}
                      className="flexCenter gap-1 px-3 py-1 text-white font-semibold rounded-lg bg-primary hover:bg-primary-dark"
                    >
                      Add
                      <FaCartArrowDown />
                    </button>
                  </div>
                </div>
              ))}
              <div className="border px-3 py-2 rounded-lg shadow-md hover:shadow-lg bg-white flex flex-col justify-between items-start md:w-64 sm:6/12 h-72">
                <div className="text-black flexCenter m-auto">
                  {" "}
                  No more products
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Products;
