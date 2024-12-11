import React from "react";
import './sign-up.style.scss'

const SignUp = () => {
    return(
        <div className="sign-up">
            <h2 className="sign-up-text">Sign Up</h2>
            <form className="sign-up-form">
                <input className="name" type="name" placeholder="Name" name="name" />
                <input className="email-sign-up" type="email" placeholder="Email" name="email" />
                <input className="password-sign-up" type="password" placeholder="Password" name="password"/>
                <input className="re-enter-password" type="password" placeholder="Confirm-Password" name="confirm-password" />
                <button className="sign-up-button">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;