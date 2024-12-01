import React, { useState } from "react";
import './ProductPage.style.scss'
import { useParams } from "react-router-dom";


const ProductPage = ({products}) =>{
    const {id} = useParams();

    const imgarray = products.flatMap((product) => product.items)
    const filterImgData = imgarray.find((item) => item.id===parseInt(id))

    return(
    <div className="checkOut-container">
        <div className="product-info">
            <div className="product-container">
            <img className="img-product" src={filterImgData.imageUrl} alt={imgarray.alt} />
            </div>
            <div className="info">
                <h1 className="product-name">{filterImgData.name}</h1>
                <p className="price">₹{filterImgData.price}</p>
                <p className="select-size">Select Size</p>
                <div className="size-container">
                <div className="size-chart"><button className="size">UK 8</button></div>
                <div className="size-chart"><button className="size">UK 9</button></div>
                <div className="size-chart"><button className="size">UK 10</button></div>
                </div>
                
                <button className="add-cart">ADD CART</button>
            </div>
            </div>
            
           
            <div className="also-like-container">
                <h1>You also like</h1>
                {imgarray.map()}
                <div className="like-img-container">
                    <img src="" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default ProductPage;