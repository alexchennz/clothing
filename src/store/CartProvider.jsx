import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultState = {
    items: []
}

const cartStateReducer = (state, action) => {
    if(action.type === "ADD"){

        let updatedItems;
        const itemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[itemIndex];
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity
            }
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        }
        else{
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
        }
    }

    return defaultState;
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