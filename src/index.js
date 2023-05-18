import App from "./components/app/App";
import ShopList from "./components/shop-list/shop-list";
import Cart from "./components/cart/cart";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <App/>,
        path: "/",
        children: [
            {
                element: <ShopList/>,
                index: true,
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
