import CartActionTypes from "./actionTypes";

const initial_state = {
    items: [],
    total_quantity: 0,
    hidden: true
}

const cartReducer = (state=initial_state, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.REMOVE_ITEM: {
                const existingItem = state.items.find(
                    (item) => item.id === action.payload.id && item.size === action.payload.size
                );
            
                if (existingItem.quantity === 1) {
                    
                    const updatedItems = state.items.filter(
                        (item) => !(item.id === action.payload.id && item.size === action.payload.size)
                    );
            
                    return {
                        ...state,
                        items: updatedItems,
                        total_quantity: state.total_quantity - 1,
                    };
                }
            
              
                return {
                    ...state,
                    items: state.items.map((item) =>
                        item.id === action.payload.id && item.size === action.payload.size
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                    total_quantity: state.total_quantity - 1,
                };
            }
            

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            const itemToRemove = state.items.find((item) => item.id ===action.payload.id && item.size===action.payload.size)
            const updatedCartItems = state.items.filter((item) => !(item.id === action.payload.id && item.size ===action.payload.size))
            return{
                ...state,
                items:updatedCartItems,
                total_quantity: updatedCartItems.length>0 ? state.total_quantity-(itemToRemove? itemToRemove.quantity: 0) : 0,

            }    
        case CartActionTypes.ADD_TO_CART:
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