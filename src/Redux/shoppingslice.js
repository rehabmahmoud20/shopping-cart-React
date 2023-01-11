import { createSlice } from "@reduxjs/toolkit";

// initialization
const initialState = {
  cartVal: 0,
  products: [],
  totalPrice: 0,
};
// reducer => state + action
export const shoppingslice = createSlice({
  name: "updatingCart",
  initialState,
  reducers: {
    // increasing the quanyity of products in the home and shopping cart
    updateCartArray(state, action) {
      const proPrice = action.payload.price;
      const itemIndex = state.products.findIndex((e) => {
        return e.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        state.products[itemIndex].quantity += 1;
        state.products[itemIndex].productPrice += proPrice;
        // editing the total price
        state.totalPrice += proPrice;
        // state
      } else {
        const productCopy = {
          ...action.payload,
          quantity: 1,
          productPrice: proPrice,
        };
        state.products.push(productCopy);
        // editing the total price
        state.totalPrice += proPrice;
      }
    },
    // increasing the cart value
    updateCartCount(state, action) {
      state.cartVal = state.cartVal + action.payload;
    },
    // decreasing the quantity of products in shopping cart
    decreaseCartCount(state, action) {
      const proPrice = action.payload.price;
      const itemIndex = state.products.findIndex((e) => {
        return e.id === action.payload.id;
      });
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
        state.cartVal = state.cartVal - 1;
        state.products[itemIndex].productPrice -= proPrice;
        // editing the total price
        state.totalPrice -= proPrice;
      }
    },
    // remove item
    removeItem(state, action) {
      const proPrice = action.payload.price;
      const itemIndex = state.products.findIndex((e) => {
        return e.id === action.payload.id;
      });
      if (state.products[itemIndex].quantity === 1) {
        state.products.splice(itemIndex, 1);
        state.cartVal = state.cartVal - 1;
        // editing the total price
        state.totalPrice -= proPrice;
      }
    },
  },
});

// extract action
export const {
  updateCartCount,
  decreaseCartCount,
  removeItem,
  updateCartArray,
} = shoppingslice.actions;
