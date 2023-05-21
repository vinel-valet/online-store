import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    cart: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state) => {

        },
        deleteItem: (state) => {

        },
        incrementItem: (state) => {

        },
        decrementItem: (state) => {

        },
        deleteAllItems: (state) => {

        },
    },
});

export const { reducer, actions } = cartSlice;