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
  },
});

export const { addToProduct } = productSlice.actions;
export default productSlice.reducer;
