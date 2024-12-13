import React from "react";
import './sign-out.style.scss'
import { useDispatch } from "react-redux";
import { signOutStart,signInSuccess,signInFailure, signOutSuccess, signOutFailure } from "../../redux/user/action";
import { signOutHandler } from "../../firebase/firebase.utils";


const SignOut = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch(signOutStart())
        try{
            await signOutHandler()
            dispatch(signOutSuccess())
        }catch(error){
            dispatch(signOutFailure(error.message))
        }
    }

    return(
        <div className="sign-out">
            <button className="sign-out-button" onClick={handleSubmit}>SignOut</button>
        </div>
    )
}

export default SignOut;