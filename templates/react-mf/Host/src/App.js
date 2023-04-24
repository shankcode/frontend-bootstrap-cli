import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Pathname } from "./Pathname";

import Homepage from "./views/Homepage";
import Product from "./views/Product";
import Dashboard from "./views/Dashboard";
import Cart from "./views/Cart";
import NotFound from "./views/404";

import PrivateOutlet from "./PrivateRoute";

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    path={Pathname.LANDING_PAGE}
                    element={<Homepage />}
                />
                <Route
                    path={Pathname.PRODUCT_LISTING}
                    element={<Product />}
                />
                <Route path={Pathname.DASHBOARD} element={<PrivateOutlet />}>
                    <Route index element={<Dashboard />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="*" component={NotFound} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
