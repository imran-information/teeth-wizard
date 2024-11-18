import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-10/12 mx-auto my-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;