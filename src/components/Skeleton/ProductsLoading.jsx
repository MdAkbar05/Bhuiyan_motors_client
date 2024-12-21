import React from "react";

const ProductsLoading = () => {
  return (
    <div class="mx-auto bg-white  shadow-lg w-96 rounded-2xl">
      <div class="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse"></div>
      <div class="p-3 h-">
        <div class="grid grid-cols-3 gap-4 mt-2">
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-8 bg-gray-200 rounded  animate-pulse"></div>
          <div class="..."></div>
          <div class="col-span-2 ..."></div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLoading;
