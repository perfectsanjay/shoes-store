import React from "react";
import "./categoryPage.style.scss";
import data from "./utils.data";
import { useParams } from "react-router-dom";

const CategoryPage = ({ categories }) => {
  const { category } = useParams();
  const selectedCategory = categories.find((cat) => cat.routeName === category);
  if (!selectedCategory) {
    return <h2>category not found</h2>;
  }

  return (
    <div className="category-container">
      <h1 className="category-title">{selectedCategory.title}</h1>
      <div className="category-img-container">
        {selectedCategory.items.map((item) => (
          <div className="img-cat" key={item.id}>
            <img className="cat-img" src={item.imageUrl} alt={item.alt} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
