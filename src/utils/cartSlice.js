import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearItem: () => {
      state.item.length = 0;
    },
  },
});

 export{addItem,removeItem,clearItem } from cartSlice.actions;
 export default cartSlice.reducer