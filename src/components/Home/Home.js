import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='grid grid-cols-1  my-5 md:flex md:justify-between p-10'>
            <div className='my-auto mx-auto'>
                <h1 className='text-3xl font-bold mt-5'>BD Cycle Repair Shop</h1>
                <p className='py-2'>Serving since 1996...</p>
                <ul className='text-lg'>
                    <li><span className='text-orange-500 font-bold'>BD Cycle Repair Shop</span> is the oldest repair shop in the town.</li>
                    <li>We repair more than 1000 bicycles every year.</li>
                    <li>highest level of customer satisfaction index.</li>
                    <li>Best known for after sales service.</li>
                </ul>
                <button className='bg-orange-400 py-2 px-3 rounded-xl hover:text-white my-5'>About us</button>
            </div>
            <div className='intro-img flex justify-center w-auto align-middle my-5'>
                <img className='w-4/5 border-4 p-1 rounded-full' src="../../images/intro.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;