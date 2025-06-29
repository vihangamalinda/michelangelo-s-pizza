import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);
      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const pizzaId = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);

      if (item) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;

        if (!item.quantity) {
          state.cart = state.cart.filter(
            (cartItem) => cartItem.pizzaId !== pizzaId,
          );
        }
      }
    },
    clearCart(state, action) {
      console.log(action);
      state.cart = [];
    },
  },
});

// Use 'reselect' library on large application for selectors to overcome performace issues
const getTotalCartItems = (state) =>
  state.cart.cart.reduce((acc, item) => item.quantity + acc, 0);
const getTotalPrice = (state) =>
  state.cart.cart.reduce((acc, item) => item.totalPrice + acc, 0);
const getCart = (state) => state.cart.cart;
const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart
    .filter((item) => item.pizzaId === id)
    .reduce((_, item) => item.quantity, 0);

export { getCart, getTotalCartItems, getTotalPrice, getCurrentQuantityById };
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
