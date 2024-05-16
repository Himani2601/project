import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterS = () => {
    return (
        <Footer container className='border border-t-8 border-yellow-300 bg-gray-800'>
            <div className='w-full mx-auto text-white'>
                <div className='grid w-full justify-between items-center sm:flex md:grid-cols-1'>
                    <div className='my-5'>
                        <Link to='/' className='font-bold text-5xl md:text-8xl text-center ' style={{ fontVariant: 'unicase' }}>
                            <div className='px-2 py-1 bg-gradient-to-r from-orange-500 via-sky-500 to-emerald-500 rounded-lg text-transparent bg-clip-text'>
                                Food Space
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-4 sm:gap-6'>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='/about'>About</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Contact Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Email: info@foodspace.com</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Phone: +91-0000000000</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>123 Main Street, City, Country.</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Facebook</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Twitter</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Instagram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='FAQs' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>FAQs</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Help Center</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Blog' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Latest Articles</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Variety</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Careers' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Job Opportunities</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Internships</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-200 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Terms of Services' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-300' href='#'>Privacy Policy</Footer.Link>
                                <Footer.Link className='hover:text-gray-300' href='#'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex text-center sm:justify-between'>
                    <Footer.Copyright
                        className='hover:text-gray-300'
                        href='#'
                        by="Food Space"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 justify-center">
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsFacebook} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsInstagram} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsTwitter} />
                        <Footer.Icon className='hover:text-gray-300' href='https://github.com/himanipatil2601' icon={BsGithub} />
                        <Footer.Icon className='hover:text-gray-300' href='#' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterS
