import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      item.quantity += 1;
      state.totalItems += 1;
      state.totalPrice += item.price;
    },
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      state.totalItems -= item.quantity;
      state.totalPrice -= item.price * item.quantity;
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
