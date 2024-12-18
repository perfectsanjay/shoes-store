import React from "react";
import "./HomePage.style.scss";
import Carousel from "../../Carousel/Carousel.component";
import BrandCategory from "../../brandCategory/brandCategory.component";
import Category from "../../Category/Category.component";
import Footer from "../../footer/Footer.component";
import { Link } from "react-router-dom";
import data from "../categoryPage/utils.data";

const HomePage = () => {
  const top_pick_data = data.flatMap((top_pick) => top_pick.items).slice(7, 10);

  return (
    <>
      <Carousel />
      <BrandCategory />
      <div className="top-picks-container">
        <h1 className="title-pick">Top Picks</h1>
        <div className="top-img">
          {top_pick_data.map((image) => (
            <div className="top-pick" key={image.id}>
              <Link to={`/shop/product/${image.id}`}>
                <img
                  className="img-top-pick"
                  src={image.imageUrl}
                  alt={image.name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Category />
      <div className="JD-select">
        <h1 className="select-title">JD SELECT</h1>
        <Link to="/shop/product/11">
          <img
            className="select-img"
            src="/shoes-images/anubhav-arora-g1vk_Bef2Xk-unsplash.jpg"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
