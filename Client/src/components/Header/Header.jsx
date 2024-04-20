import React, { useState } from 'react';
import { Navbar, Button, Dropdown, TextInput } from "flowbite-react";
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const currentUser = true; // Change to true or false as needed
    const [headerValue, setHeaderValue] = useState(currentUser ? 'Menu' : 'Home');
    const [linkValue, setLinkValue] = useState(currentUser ? '#' : '/');
    const [showSearchInput, setShowSearchInput] = useState(false);

    const handleDropdownItemClick = (value, link) => {
        setHeaderValue(value);
        setLinkValue(link);
        // If the value is 'Search Item', show the search input
        if (value === 'Search Item') {
            setShowSearchInput(true);
        } else {
            setShowSearchInput(false);
        }
    };

    return (
        <div className='fixed top-0 left-0 right-0 bg-white shadow-lg z-50 items-center'>
            <Navbar className='border-b-2 h-16'>
                <Link to='/' className='self-center whitespace-nowrap text-sm md:text-2xl font-extrabold text-white' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1.5 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% inline-block text-transparent bg-clip-text'>Food Space</span>
                </Link>

                {currentUser ? (
                    <>
                        <div className='flex md:justify-between justify-end items-center w-[70%]'>
                            <div className='flex items-center md:gap-8 md:pl-[8vw]'>
                                <NavLink
                                    to="#"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent md:border-0 hover:text-teal-600 lg:p-0 font-semibold hidden md:block`}
                                >
                                    Menu
                                </NavLink>
                                {showSearchInput && (
                                    <TextInput
                                        type="text"
                                        placeholder="Search Items.."
                                        icon={MdSearch}
                                        className="border-b my-1 block md:hidden"
                                        style={{ height: "5vh", outline: "none" }}
                                    />
                                )}
                                <TextInput
                                    type="text"
                                    placeholder="Search Items.."
                                    icon={MdSearch}
                                    className="border-b hidden md:block"
                                    style={{ height: "6vh", outline: "none" }}
                                />

                                <NavLink
                                    to="#"
                                    className={({ isActive }) => `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent md:border-0 hover:text-teal-600 lg:p-0 font-semibold hidden md:block`}
                                >
                                    <div className='flex gap-2 items-center'>Cart <MdShoppingBasket className='w-7 h-7' /></div>
                                </NavLink>

                                <NavLink
                                    to={linkValue}
                                    className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold mr-2 md:mr-3 block md:hidden`}
                                >
                                    {headerValue === 'Search Item' ? "" : headerValue}
                                </NavLink>

                                <div className='block md:hidden mr-4'>
                                    <Dropdown inline>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Menu', '/about')}>
                                            <NavLink
                                                to="#"
                                                className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                                            >
                                                Menu
                                            </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Search Item', '#')}>
                                            Search Item
                                        </Dropdown.Item>
                                        <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick(<div className='flex gap-2 items-center'>Cart <MdShoppingBasket className='w-7 h-7' /></div>, '/contact')}>
                                            <NavLink
                                                to="#"
                                                className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                                            >
                                                <div className='flex gap-2 items-center'>Cart <MdShoppingBasket className='w-7 h-7' /></div>
                                            </NavLink>
                                        </Dropdown.Item>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <Dropdown inline>
                                    <Dropdown.Header>
                                    </Dropdown.Header>
                                    Logged User
                                    <Dropdown.Divider />
                                    <Dropdown.Item className='text-md'>
                                        {/* onClick={handleSignout} */}
                                        Sign Out
                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='flex flex-wrap md:gap-3 items-center'>
                        <NavLink
                            to="#"
                            className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold hidden md:block`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) => `block py-2 pr-[1vw] pl-[1vw] duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold hidden md:block`}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="#"
                            className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold mr-2 md:mr-3 hidden md:block`}
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            to={linkValue}
                            className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold mr-2 md:mr-3 block md:hidden`}
                        >
                            {headerValue}
                        </NavLink>
                        <div className='block md:hidden mr-4'>
                            <Dropdown inline>
                                <Dropdown.Item className='text-md' onClick={() => handleDropdownItemClick('Home', '/')}>
                                    <NavLink
                                        to="#"
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
                        <Link to="#">
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
