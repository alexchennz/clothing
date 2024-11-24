import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import SizeButton from './SizeButton';
import CartContext from '../store/cart-context';

export default function ProductDetails() {
    const [clothes, setClothes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    const [selectedSize, setSelectedSize] = useState("");
    const cartctx = useContext(CartContext)

    useEffect(() => {
        const fecthClothes = async () => {
          const response = await fetch(
            'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
          );
  
          if (!response.ok) {
            // throw new Error('Something went wrong!');
            toast.error('Something went wrong!');
          }
  
          const responseData = await response.json();
  
          setClothes(responseData);
          setIsLoading(false);
        };
  
        fecthClothes().catch((error) => {
          setIsLoading(false);
          setHttpError(error.message);
        });
    }, []);
    if (isLoading) {
        return (
            <p>Loading...</p>
        );
    }
    if (httpError) {
        return (
            <p>{httpError}</p>
        );
    }
    
    const formattedPrice = clothes.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const optionSelectHandler = (optionSize) => {
        setSelectedSize(optionSize)
    }

    function addItemToCart(size) {
        if(selectedSize === "") return toast.error("Please select a size!")
        cartctx.addItem({
            id: size,
            quantity: 1,
            clothes: clothes
        })
        // setSelectedSize("")
    }

    return (
        <div className="max-w-5xl mx-auto">
            <div className='grid sm:grid-cols-2 gap-4'>
                <div className="sm:max-w-1/2">
                    <img className='max-w-md mx-auto w-full' src={clothes.imageURL} alt={clothes.title} />
                </div>
                <div className="flex flex-col gap-4 px-4 sm:px-0 sm:pl-16">
                    <h1 className='text-xl text-clothing-black'>{clothes.title}</h1>
                    <div className="font-bold border-t border-b border-clothing-gray pt-2 pb-2 mt-2 text-clothing-black">${formattedPrice}</div>
                    <p className='text-clothing-text text-sm font-light'>{clothes.description}</p>
                    <SizeButton sizeOptions={clothes.sizeOptions} onOptionSelect={optionSelectHandler} />
                    <div>
                    <button onClick={()=>{addItemToCart(selectedSize)}} className='outline outline-clothing-black uppercase outline-2 py-2 px-4 text-sm text-clothing-black font-semibold leading-none w-auto hover:bg-clothing-black hover:text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
