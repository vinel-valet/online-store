import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import App from "./components/app/App";
import {store} from "./store";
import ErrorPage from "./components/error-page/error-page";
import CartPage from "./components/cart-page/cart";
import ShopItemPage from "./components/shop-item-page/shop-item-page";
import ShopListPage from "./components/shop-list-page/shop-list.tsx";
import {fetchItemId} from "./fetch-items/fetch-item-id";
import {fetchItems} from "./fetch-items/fetch-items";

export const router = createBrowserRouter([
    {
        element: <App/>,
        path: "/",
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <ShopListPage/>,
                index: true,
                loader: fetchItems
            },
            {
                element: <ShopItemPage/>,
                path: 'item/:itemId',
                loader: fetchItemId
            },
            {
                element: <CartPage/>,
                path: '/cart'
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);