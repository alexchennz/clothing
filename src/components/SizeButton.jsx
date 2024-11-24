import React, { useState } from 'react'

export default function SizeButton({sizeOptions, onOptionSelect}) {
    const [selectedSize, setSelectedSize] = useState("");
    function sizeSelectHandler(option) {
        console.log(option.label);
        setSelectedSize(option.label);
        onOptionSelect(option.label);
    }
  return (
    <div className='my-4'>      
        <div className='text-color-gray-100 text-xs text-gray-400 font-semibold'>SIZE* <span className="text-clothing-black">{selectedSize}</span></div>
        <div className='flex gap-4 mt-2'>
            {
                sizeOptions.map((option) => (
                    <button key={option.id} onClick={() => sizeSelectHandler(option)} className={`outline outline-2 ${selectedSize === option.label ? 'outline-clothing-black' : 'outline-gray-300'} p-3 text-gray-400 text-xs leading-none w-[2.5rem] flex items-center justify-center hover:outline-clothing-black`}>{option.label}</button>
                ))
            }
        </div>
    </div>
  )
}
