import React from 'react'
import Cart from './Cart'

export default function Header() {
  return (
    <header className='bg-clothing-gray'>
        <div className=" w-full max-w-5xl mx-auto flex justify-end">
            <Cart />    
        </div>
        
    </header>
  )
}
