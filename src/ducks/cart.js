import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.items.filter((item) => item.id !== action.payload);
            state.items = removeItem;
        },
    },
})

const { reducer, actions } = cartSlice;

export default reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = actions;

export const selectCart = (rootState) => {
    return rootState.cart;
}