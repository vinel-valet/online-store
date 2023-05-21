import {reducer} from "./slices/cart.slice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer
});