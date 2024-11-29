import React from "react";
import './homePage.style.scss'
import Carousel from "../../Carousel/Carousel.component";
import BrandCategory from "../../brandCategory/brandCategory.component";
import Category from "../../Category/Category.component";
import Footer from "../../footer/Footer.component";

const HomePage = () => {
    return(
        <>
      
        <Carousel/>
        <BrandCategory/>
        <div className="top-picks-container">
            <h1 className="title-pick">Top Picks</h1>
            <div className="top-img">
                <img className="first-pick" src="/shoes-images/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg" alt="top-picks" />
                <div className="sub-top">
                <img className="second-pick" src="/shoes-images/domino-studio-164_6wVEHfI-unsplash.jpg" alt="top-picks" />
                <img className="second-pick" src="/shoes-images/felipepelaquim-6zO5VKogoZE-unsplash.jpg" alt="top-picks" />
                </div>
                
            </div>

        </div>
        <Category/>
        <div className="JD-select">
            <h1 className="select-title">JD SELECT</h1>
            <img className="select-img" src="/shoes-images/colin-lloyd-7kTyDIfhKvk-unsplash.jpg" alt="select" />
        </div>
        <Footer/>

        </>
    )
}

export default HomePage;