import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const MyOrders = () => {
    const { cartItems, food_list, user } = useContext(StoreContext);

    return (
        <div className='min-h-screen mt-5 md:mt-0'>
            <div>
                <div className='flex flex-row justify-evenly text-center mx-1 md:mx-20'>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mt-2">Item</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600  mt-2">Name</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600 mt-2">Price</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600  mt-2">Quantity</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600  mt-2">Total</p>
                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs font-medium text-gray-600  mt-2">Status</p>
                </div>
                <hr className="w-full border-2 my-3" />
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        // console.log(item); for verification of sellerId is comming or not
                        return (
                            <React.Fragment key={item._id}>
                                <div className="flex flex-row justify-evenly items-center mx-1 md:mx-20 text-center">
                                    <div className='w-full md:w-1/6' style={{ textAlign: '-webkit-center' }}>
                                        <img src={item.image} alt={item.name} className="rounded-full md:w-20 md:h-20 w-12 h-12 object-cover" />
                                    </div>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{item.name}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{item.price}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{cartItems[item._id]}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{item.price * cartItems[item._id]}</p>
                                    <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-red-800 mb-1">Pending</p>
                                </div>
                                <hr className="w-full my-3 border-2" />
                            </React.Fragment>
                        );
                    }
                })}

            </div>
        </div>
    );
};

export default MyOrders;
