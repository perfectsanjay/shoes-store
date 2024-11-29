import React from "react";
import './Category.style.scss'
import { Link } from "react-router-dom";

const Category_img_data = [
    {id: 8, url:"/shoes-images/rayul-_M6gy9oHgII-unsplash.jpg", alt:"men", title: "MEN", route: "shop/mens"},
    {id: 9, url:"/shoes-images/mike-von-rj8ohjW9RBA-unsplash.jpg", alt:"WOMEN", title: "WOMEN", route: "shop/women"},
    {id: 10, url:"/shoes-images/nathan-dumlao-P5MXtYfgmmw-unsplash.jpg", alt:"KIDS", title: "KIDS", route: "shop/kids"},
]

const Category = () => {
    return (
        <div className="Category-container">
            <h1 className="category-title">Category</h1>
            <div className="img-title-container">
            {Category_img_data.map((image) =>(
                <div className="img-container" key={image.id}>
               <Link to={image.route}>
               <img className="img-category" src={image.url} alt={image.alt} />
                <p className="title">{image.title}</p>
               </Link>
                
            </div> 
            ))}
            </div>
            
            
        </div>
    )
}

export default Category;