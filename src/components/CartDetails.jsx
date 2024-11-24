import React from 'react'

export default function CartDetails({items}) {
    // if(items.length === 0){
    //     return (
    //         <p>Your cart is empty.</p>
    //     )
    // }
    
  return (
    <div className='p-4 absolute -mt-[1px] top-8 -right-[1px] border border-clothing-black z-10 w-72 bg-white text-sm'> 
    {items.length === 0 && <p>Your cart is empty.</p>}
    {items.length > 0 && items.map((item) => (
        <div key={item.id} className='flex gap-4 mb-4 w-full'>
            <img className='w-1/4' src={item.clothes.imageURL} alt={item.clothes.title} />
            <div className='flex flex-col gap-2 w-3/4 text-clothing-black text-sm font-light'>
                <div>{item.clothes.title}</div>
                <div>{item.quantity} X <span className='font-semibold'>${item.clothes.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
                <div>Size: {item.id}</div>
            </div>
        </div>
    ))}
    </div>
  )
}
