import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sumOfCart: 0,
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, {payload}) => {
            state.sumOfCart += payload.price;
            const newItem = state.items.find((item)=> {
                return item.id === payload.id;
            });
            if (newItem) {
                newItem.allPrice += payload.price;
                newItem.quantity ++;
            } else {
                (payload).quantity = 1;
                (payload).allPrice = payload.price;
                state.items.push(payload);
            }
        },
        deleteItem: (state, {payload}) => {
            state.items = state.items.filter(obj => obj.id !== payload.id);
            state.sumOfCart -= payload.allPrice;
        },
        incrementItem: (state, {payload}) => {
            const newItem = state.items.find((item)=> {
                return item.id === payload.id;
            });
            newItem.allPrice += payload.price;
            state.sumOfCart += payload.price;
            newItem.quantity ++;
        },
        decrementItem: (state, {payload}) => {
            const newItem = state.items.find((item)=> {
                return item.id === payload.id;
            });
            if (newItem.quantity > 0) {
                newItem.allPrice -= payload.price;
                state.sumOfCart -= payload.price;
                newItem.quantity --;
                if (newItem.quantity === 0) {
                    state.items = state.items.filter(obj => obj.id !== newItem.id);
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