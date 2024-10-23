import React from 'react';
import Navbar from './Navbar';
import Updates from './Updates';

const Home = () => {
    return (
        <div>
            <h1 className='text-red-500 font-bold text-center text-3xl'>this is home page</h1>
            <Updates></Updates>
            <Navbar></Navbar>
        </div>
    );
};

export default Home;