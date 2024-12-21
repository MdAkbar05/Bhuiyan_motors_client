import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const API_URL = "http://localhost:5000/api/products";

// Async Thunks for API calls

// Fetch all getProducts
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch car by getProductById
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a new createProduct
export const createProduct = createAsyncThunk(
  "products/createProduct",

  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a new createReview
export const createReview = createAsyncThunk(
  "products/createReview",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/${data.productId}/reviews`,
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update a updateProduct
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ productId, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${productId}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete a deleteProduct
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return { id, message: response.data.message };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Search a product by query
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async ({ query, category, brand }, { rejectWithValue }) => {
    try {
      // Build query string dynamically
      const queryString = new URLSearchParams({
        ...(query && { query }), // Add query if it exists
        ...(category && { category }), // Add category if it exists
        ...(brand && { brand }), // Add brand if it exists
      }).toString();

      const res = await axios.get(`${API_URL}/search?${queryString}`);
      return res.data.payload; // Assuming `payload` contains the array of products
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  products: [],
  product: null,
  isLoading: false,
  error: null,
};

// Car slice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch car by ID
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Create a product
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update a product
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete a product
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.filter(
          (product) => product._id !== action.payload.id
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    // Handling searchProducts
    builder.addCase(searchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
      // Update the state with the search results
      state.error = null;
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// Export the async thunks and reducer
export default productSlice.reducer;
