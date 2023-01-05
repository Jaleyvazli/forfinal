import { createSlice } from "@reduxjs/toolkit";           //createSlice metodu redux-mağazanın bir hissəsini yaratmağa kömək edir

const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;           //sebet iconunun acilmasi ucun lazimdir bu
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;