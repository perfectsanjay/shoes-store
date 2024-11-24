import React from "react";
import './brandCategory.style.scss'

const brand_img_data = [
    {id: 5 , url:"src/assets/shoes-images/irene-kredenets-dwKiHoqqxk8-unsplash.jpg" , alt:"image5",title:"NB"},
    {id: 6 , url:"src/assets/shoes-images/matthew-hamilton-pO2bglTMJpo-unsplash.jpg" , alt:"image6", title:"Adidas"},
    // {id: 7 , url:"src/assets/shoes-images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg" , alt:"image7", title:"CONVERSE"},
    {id: 8 , url:"src/assets/shoes-images/verity-sanders-q4ExhrHaSLY-unsplash.jpg" , alt:"image8", title: "H&M"},
]

const BrandCategory = () => {
    return (
        <div className="brand-container">
            <h1 className="brand-title">Brands</h1>
            <div className="brand-img-container">
            { brand_img_data.map((image) => (
                <div className="brand-img" key={image.id}>
                <img className="img-brand" src={image.url} alt={image.alt} />
                <h1 className="title">{image.title}</h1>
            </div>
            
            ))}
            </div>
           
            
        </div>
    )
}

export default BrandCategory;