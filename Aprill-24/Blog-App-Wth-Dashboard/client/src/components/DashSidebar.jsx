import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react'
import { HiUser, HiArrowRight, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess, signoutFail } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
const DashSidebar = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl)
        }
    }, [location.search])

    const handleSignout = async () => {

        try {
            const res = await fetch(`/api/user/signout`, {
                method: 'POST'
            });
            const data = res.json();
            if (res.ok) {
                dispatch(signoutSuccess(data))
            } else {
                dispatch(signoutFail(data.message))
            }

        } catch (error) {
            dispatch(signoutFail(error.message))
        }
    }

    return (
        <Sidebar className='w-full md:w-56'>
            <Sidebar.Items>
                <Sidebar.ItemGroup className='flex flex-col gap-1'>
                    {
                        currentUser && currentUser.isAdmin && (

                            <Link to='/dashboard?tab=dash'>
                                <Sidebar.Item
                                    active={tab === 'dash' || !tab}
                                    icon={HiChartPie}

                                    labelColor='dark'
                                    as='div'
                                >
                                    Dashboard
                                </Sidebar.Item>
                            </Link>

                        )
                    }
                    <Link to='/dashboard?tab=profile'>
                        <Sidebar.Item
                            active={tab === 'profile'}
                            icon={HiUser}
                            label={`${currentUser.isAdmin ? 'Admin' : 'User'}`}
                            labelColor='dark'
                        >
                            Profile
                        </Sidebar.Item>
                    </Link>
                    {
                        currentUser.isAdmin && (
                            <Link to='/dashboard?tab=posts'>
                                <Sidebar.Item
                                    active={tab === 'posts'}
                                    icon={HiDocumentText}
                                    as='div'
                                    labelColor='dark'

                                >
                                    Posts
                                </Sidebar.Item>
                            </Link>
                        )
                    }

                    {
                        currentUser.isAdmin && (
                            <>
                                <Link to='/dashboard?tab=users'>
                                    <Sidebar.Item
                                        active={tab === 'users'}
                                        icon={HiOutlineUserGroup}
                                        as='div'
                                        labelColor='dark'

                                    >
                                        Users
                                    </Sidebar.Item>
                                </Link>
                                <Link to='/dashboard?tab=comments'>
                                    <Sidebar.Item
                                        active={tab === 'comments'}
                                        icon={HiAnnotation}
                                        as='div'
                                        labelColor='dark'

                                    >
                                        Comments
                                    </Sidebar.Item>
                                </Link>


                            </>
                        )
                    }



                    <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer'>
                        Sign Out
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default DashSidebar