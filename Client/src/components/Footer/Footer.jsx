import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterS = () => {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to='/' className='font-bold text-5xl md:text-6xl' style={{ fontVariant: 'unicase' }}>
                            <span className='px-2 py-1 bg-gradient-to-r from-orange-500 from-30% via-sky-500 via-50% to-emerald-500 to-90% rounded-lg inline-block text-transparent bg-clip-text'>Food Space</span>
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.100jsprojects.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Best Food
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Food_Space
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.github.com/himani2601'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link href='#'>Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright
                        href='#'
                        by="Food Space"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href='#' icon={BsFacebook} className='hover:text-gray-800' />
                        <Footer.Icon href='#' icon={BsInstagram} className='hover:text-gray-800' />
                        <Footer.Icon href='#' icon={BsTwitter} className='hover:text-gray-800' />
                        <Footer.Icon href='https://github.com/sahandghavidel' icon={BsGithub} className='hover:text-gray-800' />
                        <Footer.Icon href='#' icon={BsDribbble} className='hover:text-gray-800' />

                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterS