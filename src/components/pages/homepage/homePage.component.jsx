import React from "react";
import './homePage.style.scss'
import NavBar from "../../NavBar/NavBar.components";
import Carousel from "../../Carousel/Carousel.component";
import BrandCategory from "../../brandCategory/brandCategory.component";

const HomePage = () => {
    return(
        <>
        <NavBar/>
        <Carousel/>
        <BrandCategory/>

        </>
    )
}

export default HomePage;