import React from "react";
import { useSelector } from "react-redux";
import "./cartPage.style.scss";

const CartPage = () => {
  // Fetch cart items and total quantity from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.total_quantity);

  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
 

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
                  <img src={item.imageUrl} alt={item.name} className="cart-item-img" />
                  <h3>{item.name}</h3>
                </div>
               
                <div className="cart-item-info">
                  <p><b>Price:</b> ₹{item.price}</p>
                  <p><b>Quantity:</b> {item.quantity}</p>
                  <p><b>Size:</b> {item.size}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Summary</h2>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ₹{totalPrice}</p>
            <button className="checkout-btn">CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
