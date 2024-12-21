import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../../Features/productSlice";
import { toast } from "react-toastify";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    quantity: "",
    trend: "new",
  });

  const [image, setImage] = useState(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input for the image
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for image upload
    const productData = new FormData();
    productData.append("name", formData.name);
    productData.append("description", formData.description);
    productData.append("price", formData.price);
    productData.append("category", formData.category);
    productData.append("brand", formData.brand);
    productData.append("quantity", formData.quantity);
    productData.append("trend", formData.trend);
    if (image) {
      productData.append("imageUrl", image);
    }

    console.log(productData);
    // Dispatch the createProduct action
    try {
      await dispatch(createProduct(productData)).unwrap();
      toast.success("Product added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        quantity: "",
        trend: "",
      });
      setImage(null);
    } catch (error) {
      toast.error("Failed to add product: " + error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          ></textarea>
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Brand */}
        <div>
          <label htmlFor="brand" className="block text-sm font-medium mb-2">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium mb-2">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Trend */}
        <div>
          <label htmlFor="trend" className="block text-sm font-medium mb-2">
            Trend
          </label>
          <select
            id="trend"
            name="trend"
            value={formData.trend}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="new">new</option>
            <option value="popular">popular</option>
            <option value="special">special</option>
            <option value="trending">trending</option>
            <option value="top">top</option>
          </select>
        </div>

        {/* Image */}
        <div className="col-span-2">
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Product Image
          </label>
          <input
            type="file"
            id="imageUrl"
            name="imageUrl"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 text-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
