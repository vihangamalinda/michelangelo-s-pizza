import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: 'vihanga',
      quantity: 3,
      unitPrice: 5,
      totalPrice: 5,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducer: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart.filter((item) => item.pizzaId !== action.payload);
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

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
