import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPost from '../components/DashPost';
import DashUser from '../components/DashUser';
const DashboardPage = () => {
    const location = useLocation();
    const [tab, setTab] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
            setTab(tabFromUrl)
        }
    }, [location.search])
    return (
        <div className='min-h-screen flex flex-col  md:flex-row'>
            {/* Sidebar */}
            <div className='md:w-56'>
                <DashSidebar />
            </div>
            {tab === 'profile' && <DashProfile />}
            {tab === 'posts' && <DashPost />}
            {/* users */}
            {tab === 'users' && <DashUser />}
        </div>
    )
}

export default DashboardPage