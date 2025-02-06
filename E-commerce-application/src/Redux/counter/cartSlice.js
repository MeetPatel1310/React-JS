import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // addItem: (state, action) => {
    //   // console.log("Adding item: ", action.payload);

    //   state.push(action.payload);
    // },

    addItem: (state, action) => {
      const existingItem = state.find(
        (item) => item.productName === action.payload.productName
      );
    
      if (existingItem) {
        // If the item already exists, update its quantity
        if (existingItem.Qut < 10) { // Optional: Limit max quantity to 10
          existingItem.Qut += action.payload.Qut; // Increment by the payload quantity
        }
      } else {
        // If the item doesn't exist, add it to the cart
        state.push(action.payload);
      }
    },
    
    increment: (state, action) => {
      const item = state.find((item) => item.productName === action.payload.productName);
      if (item && item.Qut < 10) { // Ensure max quantity is 10
        item.Qut += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.find((item) => item.productName === action.payload.productName);
      if (item && item.Qut > 1) { // Ensure min quantity is 1
        item.Qut -= 1;
      }
    },
    clearCart: () => {
      return []; // Clear the entire cart
    },
    // increment: (state,action) => {
      
    //   state.action.payload.Qut += 1;
    // },

    // increment: (state, action) => {
      
    //   // const item = state.find((item) => item.id === action.payload.id); // Find the item by ID
    //   // console.log("item",state, action.payload.Qut);
    //   const item = state.find((item) => item.productName === action.payload.productName);
    //   if(item){
    //     if(item.Qut<=10){
    //       item.Qut += 1; 
    //     }
    //   }
    //   // if () {
    //   //   if (item.Qut<=11) {
    //   //     item.Qut += 1; // Increment the quantity
    //   // }
    //   //   }
    // },
    // decrement: (state,action) => {
    //   
    //   const item = state.find((item) => item.productName === action.payload.productName); // Find the item by ID
    //   if (item) {
    //     if(item.Qut>=1){
    //       item.Qut -= 1; 
    //     }
    //   }
    // },

    
  },
});

// Action creators are generated for each case reducer function
export const { addItem, increment, decrement,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
