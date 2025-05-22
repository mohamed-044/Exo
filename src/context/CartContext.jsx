import { useReducer, createContext } from "react";
import {cartReducer, initialState} from "../reducers/CartReducers";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(cartReducer, initialState);

return (
    <CartContext.Provider value={{cartCount: state.cartCount, dispatch}}>
        {children}
    </CartContext.Provider>
);
};  