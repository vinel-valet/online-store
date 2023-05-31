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
            state.sumOfCart += payload.payload.price;
            let newItem = state.items.find((item)=> {
                return item.id === payload.payload.id
            })
            if (newItem) {
                newItem.price += payload.payload.price;
             } else {
                state.items.push(payload.payload)
            }
        },
        deleteItem: (state) => {

        },
        incrementItem: (state) => {

        },
        decrementItem: (state) => {

        },
        deleteAllItems: (state) => {
            state.sumOfCart = 0;
            state.items = [];
        },
    },
});

export const { reducer, actions } = cartSlice;