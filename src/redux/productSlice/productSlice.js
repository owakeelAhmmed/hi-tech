const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  selectedProducts: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const productIdRemove = action.payload;
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== productIdRemove
      );
    },
  },
});

export const { addToProduct, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
