import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterS = () => {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full mx-auto'>
                <div className='grid w-full justify-between items-center sm:flex md:grid-cols-1'>
                    <div className='my-5'>
                        <Link to='/' className='font-bold text-5xl md:text-8xl ' style={{ fontVariant: 'unicase' }}>
                            <div className='px-2 py-1 bg-gradient-to-r from-orange-500 via-sky-500 to-emerald-500 rounded-lg text-transparent bg-clip-text'>
                                Food Space
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-4 sm:gap-6'>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='/about'>About</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Contact Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='#'>Email: info@foodspace.com</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Phone: +91-0000000000</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>abc Building, Xyz</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='#'>Facebook</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Twitter</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Instagram</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='FAQs' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='#'>FAQs</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Help Center</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Blog' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='#'>Latest Articles</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Recipes</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Careers' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='#'>Job Opportunities</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Internships</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-gray-900 text-lg font-semibold' style={{ fontVariant: 'unicase' }} title='Terms of Services' />
                            <Footer.LinkGroup col>
                                <Footer.Link className='hover:text-gray-800' href='#'>Privacy Policy</Footer.Link>
                                <Footer.Link className='hover:text-gray-800' href='#'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        className='hover:text-gray-800'
                        href='#'
                        by="Food Space"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon className='hover:text-gray-800' href='#' icon={BsFacebook} />
                        <Footer.Icon className='hover:text-gray-800' href='#' icon={BsInstagram} />
                        <Footer.Icon className='hover:text-gray-800' href='#' icon={BsTwitter} />
                        <Footer.Icon className='hover:text-gray-800' href='https://github.com/sahandghavidel' icon={BsGithub} />
                        <Footer.Icon className='hover:text-gray-800' href='#' icon={BsDribbble} />

                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterS