import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cartPage.style.scss";
import { clear_item_from_cart,remove_item,add_to_cart } from "../../../redux/cart/action";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";

const CartPage = () => {
  // Fetch cart items and total quantity from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.total_quantity);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemoveItem = (item) => {
    dispatch(clear_item_from_cart(item)); 
  };

  return (
    <div className="cart-container">
      <h1 className="text-cart">Cart</h1>

      {totalQuantity === 0 ? (
        <p className="empty-cart">Your cart is empty! Please add some shoes.</p>
      ) : (
        <div className="cart-sub">
          <div className="cart-items">
            {cartItems.map((item) => (
                
              <div key={`${item.id}-${item.size}`} className="cart-item"> 
              
                <div className="img-cont">
            <button
            className="remove-cart-item-button"
            onClick={() => handleRemoveItem(item)}
            
          >
            ✖
          </button>
                 
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <h3 className="item-cart-name">{item.name}</h3>
                </div>

                <div className="cart-item-info">
                  <p>
                    <b>Price:</b> ₹{item.price}
                  </p>
                  <div className="arrow-cont">
                  <b>Quantity:</b>
                    <div className="arrow-i" onClick={() => dispatch(remove_item(item))}><b>-</b></div>
                    <span>{item.quantity}</span> 
                    <div className="arrow-i" onClick={() => dispatch(add_to_cart(item))}><b>+</b></div>
                  </div>
                  <p>
                    <b>Size:</b> {item.size}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Summary</h2>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ₹{totalPrice}</p>
            
            <StripeCheckoutButton price={totalPrice}/>
            <div className="test-warning">
         *Please use the following test credit card for payments*
         <br/>
         4242 4242 4242 4242 - Exp: 01/25 -CVV: 123
     </div>
          </div>
         
        </div>
        
      )}
    </div>
  );
};

export default CartPage;
