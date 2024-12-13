import {
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from "./actionTypes";

// SIGN IN ACTION

export const signInStart = () => ({
  type: SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});
// Sign Up Actions
export const signUpStart = () => ({ type: SIGN_UP_START });
export const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

// Sign out success
export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

// Sign out failure
export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});

// export const signInWithEmail = (email,password) => {
//     return async (dispatch) => {
//         dispatch(signInStart())
//         try{
//             const userCredential = await signInWithEmailAndPasswordHandler(email,password)
//             dispatch(signInSuccess(userCredential.user))
//         }catch(error) {
//             dispatch(error.message)
//         }
//     }
// }

// export const googleSignIn = () => {
//     return async (dispatch) => {
//         dispatch(signInStart());
//         try{
//             const userCredential = await(SignInWithGoogle)
//             dispatch(signInSuccess(userCredential.user))
//         }catch(error){
//             dispatch(signInFailure(error.message))
//         }
//     }
// }

// export const signUpWithEmail = () =>{
//     return async(dispatch) => {
//         dispatch(signUpStart())
//         try {
//             const userCredential = await signUpWithEmailAndPasswordHandler(name,email, password);
//             dispatch(signUpSuccess(userCredential.user));
//           } catch (error) {
//             dispatch(signUpFailure(error.message));
//           }
//     }
// }
