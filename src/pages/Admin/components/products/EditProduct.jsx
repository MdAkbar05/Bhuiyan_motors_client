import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductById,
  updateProduct,
} from "../../../../Features/productSlice";

const EditProduct = () => {
  const { productId } = useParams(); // Product ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNightMode] = useOutletContext();

  const { product, isLoading } = useSelector((state) => state.products);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    brand: "",
    quantity: "",
    trend: "",
  });
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // Fetch product data on component mount
  useEffect(() => {
    if (productId) {
      dispatch(getProductById(productId));
    }
  }, [dispatch, productId]);

  // Populate form fields when product data is loaded
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        brand: product.brand || "",
        quantity: product.quantity || "",
        trend: product.trend || "",
      });
      setPreviewImage(product.imageUrl || ""); // Set preview image
    }
  }, [product]);

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input change for image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Generate preview for the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = new FormData();
    updatedProduct.append("name", formData.name);
    updatedProduct.append("price", formData.price);
    updatedProduct.append("brand", formData.brand);
    updatedProduct.append("quantity", formData.quantity);
    updatedProduct.append("trend", formData.trend);

    if (image) {
      updatedProduct.append("image", image); // Include new image if uploaded
    }

    dispatch(updateProduct({ productId, data: updatedProduct }))
      .unwrap()
      .then(() => {
        alert("Product updated successfully!");
        navigate("/dashboard/products"); // Navigate to the products list
      })
      .catch(() => alert("Failed to update product!"));
  };

  return (
    <div
      className={`container mx-auto p-4 ${
        isNightMode && `bg-secondaryBlack text-lightGray`
      }`}
    >
      <h2 className="text-2xl font-semibold mb-6">Edit Product</h2>

      {isLoading && (
        <div className="text-center text-xl">Loading product details...</div>
      )}

      {product && (
        <form onSubmit={handleSubmit} className={"max-w-3xl mx-auto"}>
          <div className="grid grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Product Name
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

            {/* Product Price */}
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

            {/* Product Brand */}
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

            {/* Product Quantity */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium mb-2"
              >
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

            {/* Product Trend */}
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
                required
              >
                <option value="popular">popular</option>
                <option value="special">special</option>
                <option value="trending">trending</option>
                <option value="top">top</option>
                <option value="new">new</option>
              </select>
            </div>

            {/* Product Image */}
            <div className="col-span-2">
              <label htmlFor="image" className="block text-sm font-medium mb-2">
                Product Image
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Product Preview"
                  className="mt-4 w-32 h-32 object-cover"
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            >
              Update Product
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProduct;
