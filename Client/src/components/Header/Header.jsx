import React, { useContext, useState } from 'react';
import { Navbar, Button, Dropdown, TextInput, Avatar } from "flowbite-react";
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Header = () => {
    const currentUser = true; // Change to true or false as needed
    const [headerValue, setHeaderValue] = useState(currentUser ? 'Menu' : 'Home');
    const [linkValue, setLinkValue] = useState(currentUser ? '/menu' : '/');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const { getTotalCartAmount } = useContext(StoreContext);

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

    return (
        <div className='fixed top-0 left-0 right-0 bg-white shadow-lg z-50 items-center'>
            <Navbar className='border-b-2 h-16'>
                <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-2xl font-extrabold text-white' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1.5 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% inline-block text-transparent bg-clip-text'>Food Space</span>
                </Link>

                {currentUser ? (
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
                                    <Link to='/search'>
                                        <TextInput
                                            type="text"
                                            placeholder="Search Items.."
                                            icon={MdSearch}
                                            className="border-b my-1 block sm:hidden"
                                            style={{ height: "5vh", outline: "none" }}
                                        />
                                    </Link>
                                )}
                                <Link to='/search'>
                                    <TextInput
                                        type="text"
                                        placeholder="Search Items.."
                                        icon={MdSearch}
                                        className="border-b hidden sm:block w-[25vw]"
                                        style={{ height: "5.5vh", outline: "none" }}
                                    />
                                </Link>
                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent md:border-0 hover:text-teal-600 lg:p-0 font-semibold hidden sm:block`}
                                >
                                    <div className='flex gap-2 items-center relative'>
                                        Cart <MdShoppingBasket className='w-7 h-7' />
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
                                            <NavLink
                                                to="#"
                                                className='block py-2 duration-200 text-gray-900 font-semibold'
                                            >
                                                Menu
                                            </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Search Item', '/search')}>
                                            Search Item
                                        </Dropdown.Item>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick(<div className='flex gap-2 items-center relative '>
                                            Cart <MdShoppingBasket className='w-7 h-7' />
                                            <div className='absolute bg-orange-500 h-2 w-2 top-0 right-0 rounded-full'></div>
                                        </div>, '/cart')}>
                                            <NavLink
                                                to="#"
                                                className='block py-2 duration-200 text-gray-900 font-semibold'
                                            >
                                                <div className='flex gap-2 items-center relative'>
                                                    Cart <MdShoppingBasket className='w-7 h-7' />
                                                    <div className='absolute bg-orange-500 h-2 w-2 top-0 right-0 rounded-full'></div>
                                                </div>
                                            </NavLink>
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
                                        {'Welcome, User'}
                                    </Dropdown.Header>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='text-md justify-center'>
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
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                                    >
                                        Home
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('About', '/about')}>
                                    <NavLink
                                        to="#"
                                        className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                                    >
                                        About
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Contact Us', '/contact')}>
                                    <NavLink
                                        to="#"
                                        className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                                    >
                                        Contact Us
                                    </NavLink>
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
