import CartActionTypes from "./actionTypes"


export const toggle_cart_hidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const add_to_cart = (item)=>({
    type: CartActionTypes.ADD_TO_CART,
    payload:item
})