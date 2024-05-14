import React, { useContext, useEffect, useState } from 'react';
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiUser, HiOutlineViewGridAdd, HiArrowLeft, HiOutlineShoppingCart } from "react-icons/hi";
import { FaShoppingBasket } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext';
import Profile from '../../pages/Profile';
import AddItem from '../../pages/AddItem';
import Orders from './Orders';
import ViewItems from './ViewItems';
import MyOrders from '../../pages/MyOrder';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { user, selectedItem, setSelectedItem } = useContext(StoreContext);
    const [tab, setTab] = useState('');
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl);
        }
    }, [location.search]);

    // Function to render active component
    const renderActiveComponent = () => {
        switch (tab) {
            case 'Profile':
                return <Profile />;
            case 'AddItem':
                return <AddItem />;
            case 'Orders':
                return <Orders />;
            case 'myorders':
                return <MyOrders />;
            case 'ViewItems':
                return <ViewItems />;
            default:
                return <Profile />;
        }
    };

    return (
        <div className='min-h-screen mt-16 flex flex-row justify-center'>
            <div className={`md:w-[20%] w-full relative ${selectedItem ? 'hidden' : ''} md:block`}>
                <Sidebar className='w-full h-[100vh]' style={{ boxShadow: '0px 0px 10px 0px #aaaaaa' }}>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiUser} onClick={() => {
                                setSelectedItem(true)
                                setTab('Profile')
                            }} label={user.isSeller ? "Seller" : "User"} labelColor="dark">
                                <span className="font-semibold">Profile</span>
                            </Sidebar.Item>
                            {
                                user?.isSeller &&
                                <>
                                    <Sidebar.Item href="#" icon={HiOutlineViewGridAdd} onClick={() => {
                                        setSelectedItem(true)
                                        setTab('AddItem')
                                    }}>
                                        <span className="font-semibold">Add Items</span>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={HiChartPie} onClick={() => {
                                        setSelectedItem(true);
                                        setTab('ViewItems')
                                    }
                                    }>
                                        <span className="font-semibold">View Items</span>
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" icon={FaShoppingBasket} onClick={() => {
                                        setSelectedItem(true)
                                        setTab('Orders')
                                    }}>
                                        <span className="font-semibold">Orders</span>
                                    </Sidebar.Item>
                                </>
                            }
                            <Sidebar.Item href="#" icon={HiOutlineShoppingCart} onClick={() => {
                                setSelectedItem(true)
                                setTab('myorders')
                            }}>
                                <span className="font-semibold">My Orders</span>
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div className={`md:w-[80%] w-full relative ${selectedItem ? 'block' : 'hidden'} md:block`}>
                <HiArrowLeft className='md:hidden block relative top-4 left-4 w-6 h-6' onClick={() => setSelectedItem(false)} />
                {renderActiveComponent()}
            </div>
        </div>
    );
};

export default Dashboard;
