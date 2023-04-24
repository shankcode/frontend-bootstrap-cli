import React from "react";
import { useNavigate } from "react-router-dom"

export const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>This is Homepage view</h1>
            <hr />
            <div>
                <button onClick={() => navigate('/products')}>Products</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => navigate('/dashboard/cart')}>Cart</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={() => navigate('/dashboard')}>dashboard</button>
            </div>
        </div>
    )
}

export default Homepage;