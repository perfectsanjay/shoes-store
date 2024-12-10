import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './cart-dropdown.style.scss'
import { toggle_cart_hidden } from "../../redux/cart/action";
import { useDispatch } from "react-redux";

const CartDropDown = () => {
    const hidden = useSelector((state) => state.cart.hidden)
    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    return(
        <div className={`Cart-dropdown ${hidden? "hidden": "" }`} >
            <div className="cart-dropdown-items">
                <button className="dropdown-close" onClick={()=> dispatch(toggle_cart_hidden())}>X</button>
                {items.length ?(
                    items.map((item) =>(
                        <div className="cart-item" key={`${item.id}-${item.size}`}>
                            <img className="dropdown-img" src={item.imageUrl} alt={item.alt} />
                            <div className="cart-drop-info">
                                <span className="name-dd">{item.name}</span>
                                <span className="size-dd">SIZE:{item.size}</span>
                                <span className="quantity-dd">QUANTITY:{item.quantity}</span>
                                <span className="price-dd">PRICE:{item.quantity * item.price}</span>
                            </div>
                        </div>
                    ) ) 
                ):(
                    <span className="empty-message">Your cart is empty</span>
                )}

            </div>
            <Link to="./shop/cart">
               <button className="go-check-btn" onClick={()=>dispatch(toggle_cart_hidden())}>GO TO CHECKOUT</button>
            </Link>
            
        </div>
    )
}

export default CartDropDown;