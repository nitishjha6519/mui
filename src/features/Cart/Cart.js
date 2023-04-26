import { createSlice } from "@reduxjs/toolkit";
// import arrayOfItems from "../../../src/cartItems";
let prevTotal = 0;

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      console.log(payload);

      //create array of object
      console.log(state.cartItems.length);
      if (state.cartItems.length === 0) {
        state.cartItems = [...state.cartItems, payload];
      } else {
        let flag = false;
        state.cartItems.forEach((item) => {
          if (item.title === payload.title) {
            item["qty"] = payload.qty;
            flag = true;
            return;
          }
        });

        if (flag === false) {
          state.cartItems = [...state.cartItems, payload];
        }
      }
    },

    removeCart: (state) => {
      // const add = action.payload;
      state.qty -= 1;
    },
    updateTotal: (state, action) => {
      console.log({ prevTotal });
      const newTotal = action.payload;
      state.total -= prevTotal;
      state.total += newTotal;
      prevTotal = newTotal;
    },
  },
});

//console.log(cartSlice);
export const { addCart, removeCart, updateTotal } = cartSlice.actions;
export default cartSlice.reducer;
