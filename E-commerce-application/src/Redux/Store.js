import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './counter/cartSlice.js'
import { Provider } from 'react-redux'


export const store = configureStore({
  reducer: {
    cart : cartReducer,
   
  },
})