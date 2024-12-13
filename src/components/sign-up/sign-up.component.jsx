import React from "react";
import './sign-up.style.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpStart,signUpSuccess, signUpFailure } from "../../redux/user/action";
import { signUpWithEmailAndPasswordHandler } from "../../firebase/firebase.utils";

const SignUp = () => {
    const [name, setName] = useState("")
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if (!email || !password) return;
        if (password !== confirmPassword){
            alert("password don't match")
            return
        }
        dispatch(signUpStart())
        try{
            const userCredential = await signUpWithEmailAndPasswordHandler(name ,email, password)
            navigate('/')
            dispatch(signUpSuccess(userCredential.user))
            

        }catch(error){
            dispatch(signUpFailure(error.message))
        }

    }

    return(
        <div className="sign-up" >
            <h2 className="sign-up-text">Sign Up</h2>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <input className="name" type="name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
                <input className="email-sign-up" type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="password-sign-up" type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="re-enter-password" type="password" placeholder="Confirm-Password" name="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="sign-up-button" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;