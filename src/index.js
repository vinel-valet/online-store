import App from "./components/app/App";
import ErrorPage from "./components/error-page/error-page";
import ShopList from "./components/shop-list/shop-list";
import Cart from "./components/cart/cart";

import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ShopItemPage from "./components/shop-item-page/shop-item-page";
import {fetchItemId} from "./components/fetch-item/fetch-item-id";
import {fetchItems} from "./components/fetch-item/fetch-items";


export const router = createBrowserRouter([
    {
        element: <App/>,
        path: "/",
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <ShopList/>,
                index: true,
                loader: fetchItems
            },
            {
                element: <ShopItemPage/>,
                path: 'item/:itemId',
                loader: fetchItemId
            },
            {
                element: <Cart/>,
                path: '/cart'
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
