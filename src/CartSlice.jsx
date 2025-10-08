import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newProduct = {
        name: action.payload.name,
        image: action.payload.image,
        cost: action.payload.cost,
        quantity: 1,
      };
      const existingItem = state.items.find(
        (item) => item.name === newProduct.name
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(newProduct);
      }
    },
    removeItem: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((product) => product.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; 
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; 
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
