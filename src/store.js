// create global store for redux reducer

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/userSlice";
import productSlice from "./Features/productSlice";
import cartSlice from "./Features/cartSlice";
import orderSlice from "./Features/orderSlice";
import reviewsSlice from "./Features/reviewsSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
    carts: cartSlice,
    orders: orderSlice,
    reviews: reviewsSlice,
  },
});
