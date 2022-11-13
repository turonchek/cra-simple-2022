import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../ducks/cart"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
    },
    devTools:true
});