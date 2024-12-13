import React, { useState, useEffect } from "react";
import "./sign-in.style.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/action";
import {
  signInWithEmailAndPasswordHandler,
  SignInWithGoogle,
} from "../../firebase/firebase.utils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    setIsLoading(true);
    setError(null);

    dispatch(signInStart());
    try {
      const userCredential = await signInWithEmailAndPasswordHandler(
        email,
        password
      );
      navigate("/");
      dispatch(signInSuccess(userCredential.user));
    } catch (error) {
      dispatch(signInFailure(error.message));
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    dispatch(signInStart());
    try {
      const {user} = await SignInWithGoogle();
      navigate("/");
      dispatch(signInSuccess(user));
    } catch (error) {
      dispatch(signInFailure(error.message));
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign In With Email and Password</span>
      {error && <p className="error">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="email"
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="sign-in-button" type="submit" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <button
        type="button"
        className="sign-in-google"
        onClick={() => handleGoogleSignIn()}
        disabled={isLoading}
      >
        {isLoading ? "Signing In With Google..." : "Sign In With Google"}
      </button>
    </div>
  );
};

export default SignIn;