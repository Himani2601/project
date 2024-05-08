import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Orders = () => {
    const { cartItems, food_list, user } = useContext(StoreContext);

    const [selectedStatus, setSelectedStatus] = useState('Pending');

    const handleStatusChange = (orderId, newStatus) => {
        // You need to implement the logic to update the status of the order in your backend
        // For example, you might send a request to your server to update the status
        // Here's a pseudo-code to give you an idea:
        // sendUpdateStatusRequest(orderId, newStatus);
    };

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
                {user.orders.map((order) => {
                    // console.log(item); for verification of sellerId is comming or not
                    return (
                        <React.Fragment key={order._id}>
                            <div className="flex flex-row justify-evenly items-center mx-1 md:mx-20 text-center">
                                <div className='w-full md:w-1/6' style={{ textAlign: '-webkit-center' }}>
                                    <img src={order.image} alt={order.name} className="rounded-full md:w-20 md:h-20 w-12 h-12 object-cover" />
                                </div>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{order.name}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{order.price}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{order.quantity}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{order.total}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-red-800 mb-1">
                                    <select
                                        value={order.status}
                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    >
                                        {['accepted', 'rejected', 'dispatched', 'delivered'].map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>))
                                        }
                                    </select>
                                </p>
                            </div>
                            <hr className="w-full my-3 border-2" />
                        </React.Fragment>
                    );
                })}

            </div>
        </div>
    );
};

export default Orders;
