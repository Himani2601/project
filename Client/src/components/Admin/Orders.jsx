import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { Dropdown, DropdownDivider } from 'flowbite-react';

const Orders = () => {
    const { user } = useContext(StoreContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch('/api/order/getorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user: user._id }),
                });
                if (res.ok) {
                    const data = await res.json();
                    setOrders(data.orders);
                } else {
                    console.error('Failed to fetch orders');
                }
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const res = await fetch(`/api/order/updatestatus/${user._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderId, status: newStatus }),
            });
            if (res.ok) {
                const updatedOrders = orders.map((order) => {
                    if (order._id === orderId) {
                        return { ...order, status: newStatus };
                    }
                    return order;
                });
                setOrders(updatedOrders);
            } else {
                console.error('Failed to update order status');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending':
            case 'rejected':
                return '#DC2626'; // Red color for pending and rejected
            case 'accepted':
            case 'delivered':
                return '#34D399'; // Green color for accepted and delivered
            case 'dispatched':
                return '#3B82F6'; // Blue color for dispatched
            default:
                return '#000000'; // Default color
        }
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
                {orders.map((order) => {
                    return (
                        <React.Fragment key={order._id}>
                            <div className="flex flex-row justify-evenly items-center mx-1 md:mx-20 text-center" key={order._id}>
                                <div className='w-full md:w-1/6' style={{ textAlign: '-webkit-center' }}>
                                    <img src={'/api/images/' + order.image} alt={order.name} className="rounded-full md:w-20 md:h-20 w-12 h-12 object-cover" />
                                </div>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{order.name}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{order.price}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">{order.quantity}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium text-gray-800 mb-1">₹{order.total}</p>
                                <p className="w-full md:w-1/6 tracking-widest md:text-lg text-xs title-font font-medium mb-1" style={{ textAlign: '-webkit-center', color: getStatusColor(order.status) }}>
                                    <Dropdown arrowIcon={false} inline label={order.status} as='div'>
                                        {['accepted', 'rejected', 'dispatched', 'delivered'].map((status) => (
                                            <React.Fragment key={status}>
                                                <Dropdown.Item
                                                    key={status} // Assign a unique key for each Dropdown.Item
                                                    onClick={() => handleStatusChange(order._id, status)}
                                                >
                                                    {status}
                                                </Dropdown.Item>
                                                <DropdownDivider key={`divider-${status}`} />
                                            </React.Fragment>
                                        ))}
                                    </Dropdown>
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
