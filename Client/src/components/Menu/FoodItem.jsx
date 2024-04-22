import React, { useContext, useState } from 'react';
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="lg:w-1/4 md:w-1/2 w-full p-4">
            <div className="h-full border-2 border-gray-300 shadow-md border-opacity-60 rounded-lg overflow-hidden transition duration-300 transform hover:scale-105">
                <div className='relative'>
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt={name} />
                    {
                        !cartItems[name] ?
                            <LuPlus onClick={() => addToCart(name)} className='mt-5 mx-5 absolute w-7 h-7 cursor-pointer bottom-5 right-0 border-2 bg-white rounded-full p-1 flex items-center justify-center hover:cursor-pointer' />
                            :
                            <div className='absolute flex gap-3 items-center p-1 bottom-5 right-0 border-2 bg-white rounded-full justify-center mr-5'>
                                <BsPatchMinus onClick={() => removeFromCart(name)} style={{ color: 'red', cursor: 'pointer' }} />
                                <p>{cartItems[name]}</p>
                                <BsPatchPlus onClick={() => addToCart(name)} style={{ color: 'green', cursor: 'pointer' }} />
                            </div>
                    }
                </div>
                <div className="p-6">
                    <h2 className="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">{name}</h2>
                    <h1 className="title-font text-sm font-medium text-gray-900 mb-3 text-justify">{description}</h1>
                    <p className="mb-1 font-bold text-red-500">₹{price}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
