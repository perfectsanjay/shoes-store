import { ADD_TO_CART } from "./actionTypes";

const initial_state = {
    items: [],
    total_quantity: 0,
}

const cartReducer = (state=initial_state, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const new_item = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.id === new_item.id && item.size === new_item.size)

            let updatedItems;

            if (existingItemIndex !== -1) {
                
                updatedItems = state.items.map((item, index) =>
                  index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            else{
                updatedItems = [...state.items, { ...new_item, quantity:1}]
            }

            return{
                ...state,
                items: updatedItems,
                total_quantity: state.total_quantity+1,
            }
            default:
                return state;
    }
}

export default cartReducer;