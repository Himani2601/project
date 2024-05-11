import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='mt-20 min-h-screen'>
            <div>
                <div className='flex flex-row justify-evenly text-center mx-1 md:mx-20'>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mb-1">Item</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mb-1">Name</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mb-1">Price</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mb-1">Quantity</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mb-1">Total</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mb-1">Remove</p>
                </div>
                <hr className="w-full border-2 my-3" />
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        // console.log(item); for verification of sellerId is comming or not
                        return (
                            <React.Fragment key={item._id}>
                                <div className="flex flex-row justify-evenly items-center mx-1 md:mx-20 text-center">
                                    <div className='w-full md:w-1/6' style={{ textAlign: '-webkit-center' }}>
                                        <img src={'/api/images/' + item.image} alt={item.name} className="rounded-full md:w-20 md:h-20 w-12 h-12 object-cover" />
                                    </div>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{item.name}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{item.price}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{cartItems[item._id]}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{item.price * cartItems[item._id]}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs cursor-pointer title-font font-medium text-red-800 mb-1" onClick={() => removeFromCart(item._id)}>Remove</p>
                                </div>
                                <hr className="w-full my-3 border-2" />
                            </React.Fragment>
                        );
                    }
                })}

            </div>
            {getTotalCartAmount() !== 0 && (
                <div className="mt-8 w-[60%] sm:w-[35%] mx-auto">
                    <div className="text-center mb-5">
                        <h2 className="text-lg font-bold">Cart Total</h2>
                    </div>
                    <div className="text-center mb-5">
                        <div className='flex flex-col gap-3'>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Subtotal</p>
                                <p className='font-semibold'>₹{getTotalCartAmount()}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600">Delivery Fee</p>
                                <p className='font-semibold'>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-600 font-bold">Total</p>
                                <p className='font-semibold'>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: "-webkit-center" }}>
                        <Link to='/placeorder'>
                            <Button gradientDuoTone="purpleToPink" outline className='mt-6'>
                                Proceed to Checkout
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
