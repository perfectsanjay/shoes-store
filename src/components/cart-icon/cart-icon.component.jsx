import React from "react";
import './cart-icon.style.scss'
import { useSelector } from "react-redux";

const Cart_icon = () => {
    const item_count = useSelector((state) =>state.cart.total_quantity)
    return(
        <div className="cart-icon-container">
            <span className="shopping-no">
               
                {item_count}</span>
               
        </div>
    )
}

export default Cart_icon;