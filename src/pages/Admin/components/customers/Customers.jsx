import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../../features/userSlice";
import { deleteReview, getReviews } from "../../../../Features/reviewsSlice";
import { useOutletContext } from "react-router-dom";
// import react toastify
import { toast } from "react-toastify";

const Customers = () => {
  const dispatch = useDispatch();
  const [isNightMode] = useOutletContext();
  const {
    users,
    error: userError,
    isLoading: userLoading,
  } = useSelector((state) => state.users);
  const {
    reviews,
    error: reviewError,
    isLoading: reviewLoading,
  } = useSelector((state) => state.reviews);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("newest"); // 'newest' or 'oldest'

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getReviews());
  }, []);

  // Filtering and sorting users and reviews
  const filteredUsers = users
    ?.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortType === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  const sortedReviews = [...reviews]?.sort((a, b) =>
    sortType === "newest"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : new Date(a.createdAt) - new Date(b.createdAt)
  );

  const handleDeleteReview = (id) => {
    dispatch(deleteReview(id));
    toast.success("Review deleted successfully");
    dispatch(getReviews());
  };
  return (
    <div
      className={
        isNightMode ? "bg-secondaryBlack text-white" : "bg-white text-black"
      }
    >
      {/* Search and Sort Controls */}
      <div className="flex justify-between items-center p-4">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm"
        />
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="ml-4 border border-gray-300 rounded px-4 py-2"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="p-6 flex gap-4">
        {/* Customers List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customer List</h3>
          {userLoading ? (
            <p>Loading customers...</p>
          ) : userError ? (
            <p className="text-red-500">Error: {userError}</p>
          ) : (
            <ul className="space-y-2">
              {filteredUsers?.map((user) => (
                <li
                  key={user.id}
                  className="p-4 border border-gray-300 rounded flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Customer Reviews</h3>
          {reviewLoading ? (
            <p>Loading reviews...</p>
          ) : reviewError ? (
            <p className="text-red-500">Error: {reviewError}</p>
          ) : (
            <ul className="flex flex-wrap gap-4">
              {sortedReviews?.map((review) => (
                <li
                  key={review._id}
                  className="p-4 border border-gray-300 rounded"
                >
                  <div className="space-y-2">
                    <p className="font-semibold">{review.user?.name}</p>
                  </div>
                  <p className="text-gray-500">{review.comment}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-yellow-500">
                    {Array(review.rating).fill("★").join("")}
                  </p>
                  <button
                    onClick={() => handleDeleteReview(review._id)}
                    className="p-1 bg-red-600 text-white rounded-md"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
