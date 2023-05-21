import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    sumOfCart: 0,
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, payload) => {
            state.sumOfCart += payload.payload;
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