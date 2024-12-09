import React, { useState } from "react";
import "./ProductPage.style.scss";
import { Link, useParams } from "react-router-dom";
import { add_to_cart } from "../../../redux/cart/action";
import { useDispatch } from "react-redux";

const ProductPage = ({ products }) => {
  const [selectSize, setSelectSize] = useState(); 
  const { id } = useParams(); 
  const dispatch = useDispatch();

  const imgarray = products.flatMap((product) => product.items); 
  const filterImgData = imgarray.find((item) => item.id === parseInt(id)); 
  const handleAddToCart = () => {
    if (!selectSize) {
      alert("Please select a shoe size"); 
      return;
    }

    dispatch(add_to_cart({ ...filterImgData, size: selectSize }));
  };

  return (
    <div className="checkOut-container">
      <div className="product-info">
        <div className="product-container">
          <img
            className="img-product"
            src={filterImgData.imageUrl} 
            alt={filterImgData.name} 
          />
        </div>
        <div className="info">
          <h1 className="product-name">{filterImgData.name}</h1>
          <p className="price">₹{filterImgData.price}</p>
          <p className="select-size">Select Size</p>
          <div className="size-container">
            {["UK 2", "UK 3", "UK 8", "UK 9", "UK 10"].map((size) => (
              <button
                key={size}
                className={`size ${selectSize === size ? "selected" : ""}`} 
                onClick={() => setSelectSize(size)} 
              >
                {size}
              </button>
            ))}
          </div>

          <button className="add-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="also-like-container">
        <h1>You also like</h1>
        <div className="also-sub-container">
          {imgarray.map((image) => (
            <div className="like-img-container" key={image.id}>
              <Link to={`/shop/product/${image.id}`}>
                <img
                  className="image-also"
                  src={image.imageUrl}
                  alt={image.name} 
                />
                <h4>{image.name}</h4>
                <p>₹{image.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
