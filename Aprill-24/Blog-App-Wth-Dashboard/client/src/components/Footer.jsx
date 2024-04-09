import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsDribbble } from 'react-icons/bs'
const FooterCompo = () => {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5 '>
                        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Ashraful's</span>
                            Blog
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>

                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col className="mb-3">
                                <Footer.Link href='https://www.100projects.com ' target='_blank' rel='noopener noreferrer'>
                                    100 js projects
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col className="mb-3">
                                <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                                    Ashraful's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div >
                            <Footer.Title title='Follow US' />
                            <Footer.LinkGroup col className="mb-3">
                                <Footer.Link href='https://github.com/Ashraf-ul-I' target='_blank' rel='noopener noreferrer'>
                                    Github
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col className="mb-3">
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div >
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col className="mb-3">
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Privacy Policy
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <Footer.LinkGroup col className="mb-3">
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full flex sm:items-center sm:justify-between'>
                    <div className='flex'>
                        <Footer.Copyright href='#' by="Ashraful's blog" year={new Date().getFullYear()} />

                    </div>
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='https://github.com/Ashraf-ul-I' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsLinkedin} />
                        <Footer.Icon href='#' icon={BsDribbble} />
                    </div>
                </div>

            </div>
        </Footer>
    )
}

export default FooterCompo