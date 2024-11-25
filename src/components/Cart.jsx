import React, { useContext, useState } from 'react'
import CartContext from '../store/cart-context';
import CartDetails from './CartDetails';

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const [showCartDetails, setShowCartDetails] = useState(false);
    const hasItems = cartCtx.items.length > 0;
    const numberOfCartItems = cartCtx.items.reduce((carNum, item) => {
        return carNum + item.quantity;
    }, 0);
    // console.log(cartCtx.items);
  return (
    <div className={`relative border ${showCartDetails ? 'bg-white border-clothing-black text-clothing-black border-b-white' : 'border-clothing-gray'}`}>
        <button className={`text-xs p-2 z-20 relative ${showCartDetails ? 'bg-white text-clothing-black' : 'text-clothing-text'}`} onClick={() => setShowCartDetails(!showCartDetails)}>
            My Cart{hasItems && <span className='ml-1'>( {numberOfCartItems} )</span>}
        </button>
        {showCartDetails && <CartDetails items={cartCtx.items} />}
    </div>
  )
}
