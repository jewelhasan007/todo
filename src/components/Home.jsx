import React from 'react';
import Navbar from './Navbar';
import Updates from './Updates';
import FoundationWorks from './FoundationWorks';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-red-500 font-bold text-center text-3xl'>this is home page</h1>
           
        </div>
    );
};

export default Home;