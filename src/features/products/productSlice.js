import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (p) => p.id === action.payload.id
      );
      state.products[index] = action.payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
