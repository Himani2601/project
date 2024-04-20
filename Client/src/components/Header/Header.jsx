import React from 'react'
import { Navbar, Button } from "flowbite-react"
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed top-0 left-0 right-0 bg-white shadow-lg z-50'>
            <Navbar className='border-b-2'>
                <Link to='#' className='self-center whitespace-nowrap text-sm sm:text-xl font-extrabold rounded-lg text-white' style={{ fontVariant: 'unicase' }}>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-lg inline-block text-transparent bg-clip-text'>Food Space</span>

                </Link>
                <div className='flex gap-3'>
                    <NavLink
                        to="#"
                        className={({ isActive }) => `block py-2 duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="#"
                        className={({ isActive }) => `block py-2 pr-[1vw] pl-[1vw] duration-200 ${isActive ? "text-orange-700" : "text-gray-900"} font-semibold`}
                    // onClick={scrollToAbout}
                    >
                        About
                    </NavLink>
                    <Link to="#">
                        <Button gradientDuoTone="purpleToPink" outline>
                            Sign In
                        </Button>
                    </Link>
                </div>
            </Navbar >
        </div>
    )
}

export default Header