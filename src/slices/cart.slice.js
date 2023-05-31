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
                newItem.allPrice += payload.payload.price;
                newItem.quantity ++;
             } else {
                (payload.payload).quantity = 1;
                (payload.payload).allPrice = payload.payload.price;
                state.items.push(payload.payload)
            }
        },
        deleteItem: (state) => {

        },
        incrementItem: (state, payload) => {
            let newItem = state.items.find((item)=> {
                return item.id === payload.payload.id
            })
            newItem.allPrice += payload.payload.price;
            state.sumOfCart += payload.payload.price;
            newItem.quantity ++;
        },
        decrementItem: (state, payload) => {
            let newItem = state.items.find((item)=> {
                return item.id === payload.payload.id
            })
            if (newItem.quantity > 0) {
                newItem.allPrice -= payload.payload.price;
                state.sumOfCart -= payload.payload.price;
                newItem.quantity --;
                if (newItem.quantity === 0) {
                    state.items = state.items.filter(obj => obj.id !== newItem.id)
                }
            }
        },
        deleteAllItems: (state) => {
            state.sumOfCart = 0;
            state.items = [];
        },
    },
});

export const { reducer, actions } = cartSlice;