import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { getReviews } from "../../../../../Features/reviewsSlice";

const CustomerReviews = () => {
  const [isNightMode] = useOutletContext();
  const dispatch = useDispatch();
  const { reviews, isLoading, error } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  // Calculate the overall rating and breakdown stats
  const calculateRatingBreakdown = (reviews) => {
    const ratingCounts = {
      Excellent: 0,
      Good: 0,
      Average: 0,
      AvgBelow: 0,
      Poor: 0,
    };

    reviews.forEach((review) => {
      if (review.rating === 5) ratingCounts.Excellent++;
      else if (review.rating >= 4) ratingCounts.Good++;
      else if (review.rating === 3) ratingCounts.Average++;
      else if (review.rating === 2) ratingCounts.AvgBelow++;
      else ratingCounts.Poor++;
    });

    return ratingCounts;
  };

  const ratingBreakdown = calculateRatingBreakdown(reviews);

  const totalReviews = reviews.length;
  const averageRating = totalReviews
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    : 0;

  return (
    <div
      className={
        isNightMode
          ? "bg-secondaryBlack p-6 rounded-md w-full max-w-md space-y-4"
          : "bg-white drop-shadow-md p-6 rounded-md w-full max-w-md space-y-4 text-blackBG"
      }
    >
      {/* Title and Refresh */}
      <div className="flex items-center justify-between">
        <h2
          className={
            isNightMode
              ? "text-white text-lg font-bold"
              : "text-blackBG text-lg font-bold"
          }
        >
          Customer Reviews
        </h2>
        <button
          className={
            isNightMode
              ? "text-green-400 hover:text-green-300"
              : "text-green-600 hover:text-green-500"
          }
        >
          &#x21bb; {/* Refresh icon */}
        </button>
      </div>

      {/* Star Rating */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
          {Array(Math.floor(averageRating))
            .fill(0)
            .map((_, index) => (
              <span key={index} className="text-yellow-400 text-xl">
                &#9733;
              </span> // Filled star
            ))}
          {averageRating % 1 !== 0 && (
            <span className="text-yellow-400 text-xl">&#9734;</span> // Half-star
          )}
        </div>
        <p
          className={
            isNightMode
              ? "text-white text-xl font-semibold"
              : "text-blackBG text-xl font-semibold"
          }
        >
          {averageRating.toFixed(1)}
        </p>
        <p className="text-gray-500 text-sm">Out of 5 Star</p>
      </div>

      {/* Review Summary */}
      <p className="text-gray-500 text-sm">
        Overall Rating of {totalReviews} Customer's Reviews
      </p>

      {/* Ratings Breakdown */}
      <div className="space-y-2">
        {[
          {
            label: "Excellent",
            value: (ratingBreakdown.Excellent / totalReviews) * 100,
            color: "bg-green-500",
          },
          {
            label: "Good",
            value: (ratingBreakdown.Good / totalReviews) * 100,
            color: "bg-green-300",
          },
          {
            label: "Average",
            value: (ratingBreakdown.Average / totalReviews) * 100,
            color: "bg-yellow-400",
          },
          {
            label: "Avg Below",
            value: (ratingBreakdown.AvgBelow / totalReviews) * 100,
            color: "bg-yellow-500",
          },
          {
            label: "Poor",
            value: (ratingBreakdown.Poor / totalReviews) * 100,
            color: "bg-red-500",
          },
        ].map((rating, index) => (
          <div key={index} className="flex items-center space-x-2">
            <p
              className={
                isNightMode
                  ? "text-white text-sm w-20"
                  : "text-blackBG text-sm w-20"
              }
            >
              {rating.label}
            </p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className={`h-2 rounded-full ${rating.color}`}
                style={{ width: `${rating.value}%` }}
              ></div>
            </div>
            <p
              className={
                isNightMode ? "text-white text-sm" : "text-blackBG text-sm"
              }
            >
              {ratingBreakdown[rating.label]}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <p
        className={
          isNightMode
            ? "text-gray-400 text-sm text-center"
            : "text-gray-600 text-sm text-center"
        }
      >
        Here is the result for the latest responsible would recommend this{" "}
        {totalReviews} customer's reviews.
      </p>

      {/* CTA Button */}
      <button className="w-full py-2 rounded-md text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600">
        <Link to="/dashboard/customers">See All Customer's Reviews</Link>
      </button>
    </div>
  );
};

export default CustomerReviews;
