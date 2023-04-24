import React from "react";

export const Cart = (props) => {
    // console.log(props)

    const style = {
        itemText: {
            cursor: "pointer",
            margin: "20px 0"
        }
    }

    return (
        <div>
            <h1>This is the <strong>Cart Page</strong></h1>
            <ul>{
                props.itemList.map(item => {
                    return <li style={style.itemText} onClick={(e) => props.handleClick(e)}>{item}</li>
                })
            }
                {/* <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li> */}
            </ul>
        </div>
    )
}

export default Cart;