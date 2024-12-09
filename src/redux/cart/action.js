import { ADD_TO_CART } from "./actionTypes";

export const add_to_cart = (item)=>({
    type: ADD_TO_CART,
    payload:item
})