import CartActionTypes from "./actionTypes"


export const toggle_cart_hidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})


export const add_to_cart = (item)=>({
    type: CartActionTypes.ADD_TO_CART,
    payload:item
})

export const remove_item = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload:item
})

export const clear_item_from_cart = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})



