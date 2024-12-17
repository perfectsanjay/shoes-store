import React from "react";
import './brandCategory.style.scss'
import { Link } from "react-router-dom";
import data from "../pages/categoryPage/utils.data";


const brand_category_data = data.flatMap((brand_category) => brand_category.items).slice(2,6)

const BrandCategory = () => {
    return (
        <div className="brand-container">
            <h1 className="brand-title">Brands</h1>
            <div className="brand-img-container">
            { brand_category_data.map((image) => (
                <div className="brand-img" key={image.id}>
                    <Link to={`shop/product/${image.id}`}>
                    <img className="img-brand" src={image.imageUrl} alt={image.name} /> 
                    </Link>
               
                <h1 className="title">{image.brand}</h1>
            </div>
            
            ))}
            </div>
                      
            
        </div>
    )
}

export default BrandCategory;