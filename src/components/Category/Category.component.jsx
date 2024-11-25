import React from "react";
import './Category.style.scss'

const Category_img_data = [
    {id: 8, url:"src/assets/shoes-images/rayul-_M6gy9oHgII-unsplash.jpg", alt:"men", title: "MEN"},
    {id: 9, url:"src/assets/shoes-images/mike-von-rj8ohjW9RBA-unsplash.jpg", alt:"WOMEN", title: "WOMEN"},
    {id: 10, url:"src/assets/shoes-images/nathan-dumlao-P5MXtYfgmmw-unsplash.jpg", alt:"KIDS", title: "KIDS"},
]

const Category = () => {
    return (
        <div className="Category-container">
            <h1 className="category-title">Category</h1>
            <div className="img-title-container">
            {Category_img_data.map((image) =>(
                <div className="img-container" key={image.id}>
                <img className="img-category" src={image.url} alt={image.alt} />
                <p className="title">{image.title}</p>
            </div> 
            ))}
            </div>
            
            
        </div>
    )
}

export default Category;