import React from "react";
import { useNavigate } from "react-router-dom";
const ProductView = React.lazy(() => import('product/productIndex'));

export const Products = () => {
    let navigate = useNavigate();

    return (
        <>
            <React.Suspense fallback={"Loading..."}>
                <ProductView />
                <hr />
                <button onClick={() => navigate(-1)}>Go Back</button>
            </React.Suspense>
        </>
    )
}

export default Products;