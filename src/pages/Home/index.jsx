import React, { useState } from "react";
import HelmetPage from "../../components/Helmet";
import HeroImage from "../../assets/hero-section.png";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../features/productSlice";

const Home = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("");
  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Dispatch search action or call API with query, category, and brand
    console.log({
      query: searchQuery,
      category: selectedCategory,
      brand: selectedBrand,
    });
    dispatch(
      searchProducts({
        query: searchQuery,
        category: selectedCategory,
        brand: selectedBrand,
      })
    );
    navigate(
      `/search?query=${
        searchQuery
          ? searchQuery
          : selectedCategory
          ? selectedCategory
          : selectedBrand
      }`
    );
  };

  return (
    <>
      <HelmetPage
        title="Bhuiyan Motors | Home Page"
        desc="Explore the Bhuiyan Motors Shop and get your necessary parts"
        link="http://localhost:3000/"
      />
      <div className="banner lg:h-[520px]">
        <div className="container mx-auto flex md:flex-row sm:flex-col-reverse justify-between items-center h-full sm:py-4">
          <div className="space-y-4 md:text-start sm:text-center">
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl font-bold text-textColor leading-snug">
              MS.BHUIYAN MOTORS <br /> AUTO PARTS STORE
            </h1>
            <p className="md:text-xl text-textColor sm:text-base">
              Welcome to the Bhuiyan Motors Shop, where you will find everything
              you need to build your dream car
            </p>
            <button className="bg-section text-textColor px-4 py-2 rounded-md hover:bg-gray-800 transition-all mr-4">
              <a href="#category">Explore Now</a>
            </button>
            <button
              className="bg-primary text-textColor px-4 py-2 rounded-md hover:bg-gray-800 transition-all"
              onClick={handleDialogToggle}
            >
              Find parts
            </button>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="Car"
              className="object-cover w-full md:h-full sm:h-44"
            />
          </div>
        </div>
      </div>

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-semibold text-gray-700">
                Find Parts
              </h3>
              <button
                className="text-lg text-gray-600 hover:text-red-500 transition-all"
                onClick={handleDialogToggle}
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <form
                className="space-y-4"
                onSubmit={handleSearch} // Add your search handler
              >
                {/* Search Box */}
                <div>
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Search for a part
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Enter part name..."
                    className="text-secondary w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
                    value={searchQuery} // Controlled input
                    onChange={(e) => setSearchQuery(e.target.value)} // Update state
                  />
                </div>

                {/* Select Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Select Category
                  </label>
                  <select
                    id="category"
                    className="text-secondary w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
                    value={selectedCategory} // Controlled select
                    onChange={(e) => setSelectedCategory(e.target.value)} // Update state
                  >
                    <option className="text-secondary" value="">
                      Select category
                    </option>
                    {categories?.map((category) => (
                      <option
                        className="text-secondary"
                        key={category}
                        value={category}
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Brand */}
                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Select Brand
                  </label>
                  <select
                    id="brand"
                    className="text-secondary w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
                    value={selectedBrand} // Controlled select
                    onChange={(e) => setSelectedBrand(e.target.value)} // Update state
                  >
                    <option className="text-secondary" value="">
                      Select brand
                    </option>
                    {brands?.map((brand) => (
                      <option
                        className="text-secondary"
                        key={brand}
                        value={brand}
                      >
                        {brand}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-300 rounded-md hover:bg-gray-400 transition-all"
                    onClick={handleDialogToggle}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-gray-800 transition-all"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
