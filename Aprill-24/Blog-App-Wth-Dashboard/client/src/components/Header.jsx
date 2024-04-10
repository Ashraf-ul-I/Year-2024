import React from 'react'
import { Avatar, Button, Dropdown, DropdownHeader, Navbar, NavbarToggle, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { useSelector } from 'react-redux'
const Header = () => {
    const path = useLocation().pathname;
    const { currentUser } = useSelector(state => state.user);
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Ashraful's</span>
                Blog
            </Link>

            <form action="">
                {/* This textInput is from the flowbite here we use rightIcon means it will show a search icon in the right side of the search input we dont need to write code so much  */}
                <TextInput type='text'
                    placeholder='Search..'
                    rightIcon={FiSearch}
                    className='hidden lg:inline' />
            </form>
            {/* here this tailwind lg:hidden means in large screen it will not visible to page and pill is for just rounded the search logo in pill */}
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <FiSearch />
            </Button>
            {/* this div flex will make the two button stay align together  */}
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill><FaMoon /></Button>
                {
                    currentUser ? (
                        <Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture} rounded />}>
                            <Dropdown.Header>
                                <span className='block text-sm'>@{currentUser.username}</span>
                                <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                            </Dropdown.Header>
                            <Link to={'/dashboard?tab=profile'}>
                                <Dropdown.Item>profile</Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    ) : (<Link to='/sign-in'>
                        <Button gradientDuoTone="purpleToBlue" outline>Sign In</Button>
                    </Link>)
                }

                <NavbarToggle />
            </div>
            {/* This things will woks as if we big the screen all the things will show in pages but if we in Mobile screen the inner dic navbar toggle will show in the right corner and whenever we just click on 
            toggle this below collapse section all things will show. */}
            <Navbar.Collapse >
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header