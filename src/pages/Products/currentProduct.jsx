import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/cartSlice";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { createReview, getProductById } from "../../Features/productSlice";
import ReviewCard from "./ReviewCard";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [selectedRating, setSelectedRating] = useState();
  const { product } = useSelector((state) => state.products);
  const [user, setUser] = React.useState(null);
  const location = useLocation();

  // Retrieve user from local storage
  const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };

  // Call getUser
  useEffect(() => {
    getUser();
  }, [location]);

  // Handle ReviewSubmit
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please log in to review the product");
      return;
    }
    // Retrieve data from the form fields using the "name" attributes
    const formData = new FormData(e.target);
    const rating = formData.get("rating");
    const comment = formData.get("comment");
    // Validate the inputs
    if (!rating || !comment.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    // Create the review object
    const review = {
      productId: product._id,
      userId: user.id,
      rating: parseInt(rating), // Ensure rating is an integer
      comment: comment.trim(),
    };

    dispatch(createReview(review));
    toast.success("Review submitted successfully");
    dispatch(getProductById(product._id));
  };
  console.log(product);
  return (
    <div className="bg-extra min-h-screen mx-auto p-4 sm:p-6 lg:p-8 container">
      {/* Product Information */}
      <div className="flex items-center mx-auto bg-extra shadow-md rounded-lg overflow-hidden">
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="w-fit h-auto object-cover sm:h-80 lg:h-96 m-8 border-4 border-primary"
        />
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-white ">{product?.name}</h1>
          <p className="text-lightGray mt-2">{product?.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <p className="text-lg text-primary font-semibold">
              {product?.price} $
            </p>
            <p className="text-sm text-lightGray">
              Category: {product?.category}
            </p>
            <p className="text-sm text-lightGray">Brand: {product?.brand}</p>
          </div>
          <div className="flex items-center space-x-2 ">
            <p className="text-lightGray">
              Rating: {parseFloat(product?.ratings.toFixed(2))}
            </p>
            <p className="text-lightGray">
              ({product?.reviews?.length} reviewed)
            </p>
          </div>
          <p
            className={` text-sm ${
              product?.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product?.inStock ? "In Stock" : "Out of Stock"} -{" "}
            {product?.quantity} left
          </p>
          <span
            className={` text-sm uppercase  ${
              product?.trend == "popular" ? "text-green-600" : "text-red-500"
            }`}
          >
            {product?.trend}
          </span>
          {/* add to cart  */}
          <button
            onClick={() => {
              dispatch(addToCart(product, product._id));
              toast.success(`${product.name} added successfully`);
            }}
            className={`rounded-sm w-full px-4 py-2 text-sm font-medium text-white ${
              product?.inStock ? "bg-primary" : "bg-gray-300"
            } ${
              product?.inStock ? "hover:bg-primary-dark" : "hover:bg-gray-400"
            }`}
            disabled={!product?.inStock}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className=" mx-auto mt-8 bg-extra p-6 rounded-lg">
        <h2 className="text-xl font-semibold ">Ratings and reviews </h2>
        {product?.reviews.length >= 0 ? (
          <div className="mt-4  flex items-center flex-wrap gap-4">
            {product?.reviews.map((review) => (
              <ReviewCard
                name={review.user.name}
                date={review.createdAt}
                reviewText={review.comment}
                key={review._id}
                stars={review.rating}
              />
            ))}
          </div>
        ) : (
          <p className="text-slate-200 mt-4">No reviews yet.</p>
        )}

        {/* Write a Review */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Write a Review</h3>
          <p className="text-sm text-slate-200">
            Reviews are only visble to developers and include your account and
            device info
          </p>
          <form className="mt-4 space-y-6" onSubmit={handleReviewSubmit}>
            {/* Star Rating */}
            <div className="flexCenter flex-col">
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setSelectedRating(star)}
                    className={`text-7xl ${
                      selectedRating >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <input
                type="hidden"
                name="rating"
                value={selectedRating}
                required
              />
            </div>

            {/* Comment Field */}
            <div className="flexCenter flex-col">
              <textarea
                className="text-center bg-extra w-full p-2 border border-white rounded-md text-slate-200 focus:outline-none"
                rows="2"
                name="comment"
                placeholder="Describe your experience (Required)"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-200"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
