import React from "react";

const ReviewCard = ({ name, date, stars, reviewText }) => {
  return (
    <div className="bg-extra p-4 rounded-lg shadow-md w-80">
      {/* User Info */}
      <div className="flex items-center mb-3 gap-2">
        <div className="size-8 flexCenter rounded-full p-1 bg-blue-600 text-xl">
          {name.slice(0, 1)}
        </div>
        <div>
          <h4 className="font-bold text-white flex items-center">
            {name}
            <span className="text-white ml-2">•</span>
          </h4>
          <p className="text-sm text-lightGray">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-500 text-lg">
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-200">{reviewText}</p>
    </div>
  );
};

export default ReviewCard;
