import React from "react";
import './Footer.style.scss'

const Footer = () => {
    return(
        <div className="footer-container">
            <h1 className="know-more">KNOW MORE</h1>
            <div className="link-container">
                <a href="https://www.linkedin.com/in/sanjay-tanwar-2680811b3/">LinkedIn</a>
                <a href="https://github.com/perfectsanjay">GitHub</a>
            </div>
        </div>
    )
}

export default Footer;