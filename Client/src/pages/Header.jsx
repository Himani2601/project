import React, { useContext, useState } from 'react';
import { Navbar, Button, Dropdown, TextInput, Avatar } from "flowbite-react";
import { HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Header = () => {
    const { getTotalCartAmount, user, logout, setSearch } = useContext(StoreContext);
    const [headerValue, setHeaderValue] = useState(user ? 'Menu' : 'Home');
    const [linkValue, setLinkValue] = useState(user ? '/menu' : '/');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const navigate = useNavigate();

    const handleDropdownItemClick = (value, link) => {
        setHeaderValue(value);
        setLinkValue(link);
        // If the value is 'Search Item', show the search input
        if (value === 'Search Item') {
            setShowSearchInput(true);
        } else {
            setShowSearchInput(false);
        }
        navigate(link);
    };

    const handleSignout = async () => {
        try {
            const res = await fetch('/api/user/signout', {
                method: 'POST',
            });
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                logout(); // Call logout function from StoreContext
                navigate('/');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className='fixed top-0 left-0 right-0 bg-white shadow-lg z-50 items-center'>
            <Navbar className='border-b-2 h-16'>
                <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-2xl font-extrabold text-white' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1.5 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% inline-block text-transparent bg-clip-text'>Food Space</span>
                </Link>

                {user ? (
                    <>
                        <div className='flex sm:justify-between justify-end items-center w-[70%]'>
                            <div className='flex items-center md:gap-8 md:pl-[2vw]'>
                                <NavLink
                                    to="/menu"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent md:border-0 hover:text-teal-600 lg:p-0 font-semibold hidden sm:block`}
                                >
                                    Menu
                                </NavLink>
                                {showSearchInput && (
                                    <Link to="/menu">
                                        <TextInput
                                            type="text"
                                            placeholder="Search Items.."
                                            icon={HiSearch}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="border-b my-1 block sm:hidden"
                                            style={{ height: "5vh", outline: "none" }}
                                        />
                                    </Link>
                                )}
                                <Link to="/menu">
                                    <TextInput
                                        type="text"
                                        placeholder="Search Items.."
                                        icon={HiSearch}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="border-b hidden sm:block w-[25vw]"
                                        style={{ height: "5.5vh", outline: "none" }}
                                    />
                                </Link>
                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent md:border-0 hover:text-teal-600 lg:p-0 font-semibold hidden sm:block`}
                                >
                                    <div className='flex gap-2 items-center relative'>
                                        Cart <HiOutlineShoppingCart className='w-7 h-7' />
                                        {getTotalCartAmount() !== 0 && <div className='absolute bg-orange-500 h-2 w-2 top-0 right-0 rounded-full'></div>}
                                    </div>

                                </NavLink>

                                <NavLink
                                    to={linkValue}
                                    className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold mr-2 md:mr-3 block sm:hidden`}
                                >
                                    {headerValue === 'Search Item' ? "" : headerValue}
                                </NavLink>

                                <div className='block sm:hidden mr-4'>
                                    <Dropdown inline>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Menu', '/menu')}>
                                            Menu
                                        </Dropdown.Item>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Search Item', '/menu')}>
                                            Search Item
                                        </Dropdown.Item>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Cart', '/cart')}>
                                            Cart {<HiOutlineShoppingCart />}
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <Dropdown arrowIcon={false} inline label={
                                    <Avatar
                                        alt='user'
                                        img='https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU='
                                        rounded className='w-10 h-5' />
                                }>
                                    <Dropdown.Header className='text-center'>
                                        {`Welcome, ${user.name}`}
                                    </Dropdown.Header>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='text-md font-semibold justify-center' onClick={() => navigate('/dashboard')}>
                                        Dashboard
                                    </Dropdown.Item>
                                    <Dropdown.Item className='text-md font-semibold justify-center' onClick={handleSignout}>
                                        Sign Out
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-wrap sm:gap-3 items-center'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold hidden sm:block`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) => `block py-2 pr-[1vw] pl-[1vw] duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold hidden sm:block`}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold mr-2 md:mr-3 hidden sm:block`}
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            to={linkValue}
                            className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold mr-2 md:mr-3 block sm:hidden`}
                        >
                            {headerValue}
                        </NavLink>
                        <div className='block sm:hidden mr-4'>
                            <Dropdown inline>
                                <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Home', '/')}>
                                    Home
                                </Dropdown.Item>
                                <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('About', '/about')}>
                                    About
                                </Dropdown.Item>
                                <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Contact Us', '/contact')}>
                                    Contact Us
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                        <Link to="/signin">
                            <Button gradientDuoTone="purpleToPink" outline>
                                Sign In
                            </Button>
                        </Link>
                    </div>
                )}
            </Navbar>
        </div>
    );
}

export default Header;