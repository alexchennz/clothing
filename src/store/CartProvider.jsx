import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultState = {
    items: []
}

const cartStateReducer = (state, action) => {
    switch (action.type) {
        case "ADD": {
            const itemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = state.items[itemIndex];
            const updatedItems = existingCartItem
                ? state.items.map((item, index) =>
                      index === itemIndex
                          ? { ...item, quantity: item.quantity + action.item.quantity }
                          : item
                  )
                : state.items.concat(action.item);

            return { items: updatedItems };
        }
        default:
            return defaultState;
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartStateReducer, defaultState);
    const addItemToCartHandler = (item) => {
        dispatchCartState({type: "ADD", item: item});
    }
    const cartContext = {
        items: cartState.items,
        addItem: addItemToCartHandler,
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider