import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className=''>
            <div className='about-img flex justify-center my-5'>
                <img className='border-4' src="../../images/topBan.jpg" alt="" />
            </div>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-3xl font-bold mt-8'>BD Cycle Repair Shop</h1>
                <h1 className='text-md mt-5'><span className='text-orange-500 font-bold'>BD Cycle Repair Shop</span> is the oldest shop with best reputation in the market. Cycle is yours and management is ours. We encourage people to use this eco friendly vehicle which contributes to the better environment and better health.</h1>
                <h1 className='text-2xl font-bold mt-8'>Contact Us</h1>
                <address className='mb-10'><small>114, Madani Avenue, Gulshan, Dhaka-1200, Bangladesh <br></br>E-mail us:<a href="mailto:support@bd-cycle-repair.com"> support@bd-cycle-repair.com</a></small></address>
            </div>
        </div>
    );
};

export default About;