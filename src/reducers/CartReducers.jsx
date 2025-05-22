export const initialState = {cartCount : 0};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { cartCount : state.cartCount + 1};
    
        case "decrement" :
            return { cartCount : Math.max(0, state.cartCount - 1),};
    default: return state; 
}
};