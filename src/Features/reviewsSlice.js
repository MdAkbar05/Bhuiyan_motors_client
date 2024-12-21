import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const basePath = "http://localhost:5000/api/reviews";

// Async thunk for getting all reviews
export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(basePath, {
        withCredentials: true,
      });
      return response.data.reviews; // Extracting the `reviews` array from the response
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${basePath}/${id}`, {
        withCredentials: true,
      });
      return response.data; // Extracting the `reviews` array from the response
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [], // Array to store the reviews
    isLoading: false, // Loading state for API calls
    error: null, // Error state for handling failures
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state for getReviews
      .addCase(getReviews.pending, (state) => {
        state.isLoading = true; // Set loading to true
        state.error = null; // Reset error
      })
      // Handle fulfilled state for getReviews
      .addCase(getReviews.fulfilled, (state, action) => {
        state.isLoading = false; // Set loading to false
        state.reviews = action.payload; // Populate the reviews array
      })
      // Handle rejected state for getReviews
      .addCase(getReviews.rejected, (state, action) => {
        state.isLoading = false; // Set loading to false
        state.error = action.payload; // Store the error message
      })

      // Handle rejected state for deleteReview
      .addCase(deleteReview.rejected, (state, action) => {
        state.isLoading = false; // Set loading to false
        state.error = action.payload; // Store the error message
      });
  },
});

export default reviewsSlice.reducer;
