import React from "react";
import './sign-in.style.scss'

const SignIn = () =>{
    return(
        <div className="sign-in">
            <h2>Alredy have account?</h2>
            <span>Sign In With Email and Password</span>
            <form className="form">
                <input className="email" type="email" name="email" placeholder="Email"  />
                <input className="password" type="password" name="password" placeholder="password" />
                <button className="sign-in-button" type="submit">Sign In</button>
                
            </form>
                <button type="submit" className="sign-in-google">Sign In With Google</button>
        </div>
    )
}

export default SignIn;
