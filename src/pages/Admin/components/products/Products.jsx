import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, deleteProduct } from "../../../../Features/productSlice";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleEditProduct = (productId) => {
    navigate(`edit/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    dispatch(getProducts()); // Refetch products after deletion
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // Filter and sort products based on search term and sort order
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      {/* Search and Sort Controls */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-4 py-2 w-1/3 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSort}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sort by: {sortOrder === "asc" ? "First Date" : "Last Date"}
        </button>
        <button
          onClick={() => navigate("new")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          New Product
        </button>
      </div>

      {status === "loading" && (
        <div className="text-center text-2xl">Loading...</div>
      )}
      {status === "failed" && (
        <div className="text-center text-2xl">Failed to load products.</div>
      )}

      {filteredProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-primary-200 drop-shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="py-2 px-4 text-left text-sm font-semibold">
                  Name
                </th>
                <th className="py-2 px-4 text-left text-sm font-semibold">
                  Price
                </th>
                <th className="py-2 px-4 text-left text-sm font-semibold">
                  Stock
                </th>
                <th className="py-2 px-4 text-left text-sm font-semibold">
                  Date
                </th>
                <th className="py-2 px-4 text-left text-sm font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-black">
              {filteredProducts?.map((product) => (
                <tr
                  key={product._id}
                  className="border-b bg-white hover:bg-gray-50"
                >
                  <td className="py-2 px-4 text-sm">{product.name}</td>
                  <td className="py-2 px-4 text-sm">
                    {product.price.toFixed(2)} TK
                  </td>
                  <td className="py-2 px-4 text-sm">{product.quantity}</td>
                  <td className="py-2 px-4 text-sm">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 text-sm">
                    <button
                      onClick={() => handleEditProduct(product._id)}
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-10 text-xl">No products found.</div>
      )}
    </div>
  );
};

export default Products;
