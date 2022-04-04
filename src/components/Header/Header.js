import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-orange-400 py-3 grid grid-cols-2 px-2 sticky top-0'>
            <div className='flex justify-start'>
                <h1 className='text-3xl font-bold text-white'>BD Cycle Repair <FontAwesomeIcon icon={faScrewdriverWrench} /></h1>
            </div>
            <nav className='flex justify-evenly align-middle'>
                <Link className='text-xl hover:text-white' to='/home'>Home</Link>
                <Link className='text-xl hover:text-white' to='/reviews'>Reviews</Link>
                <Link className='text-xl hover:text-white' to='/dashboard'>Dashboard</Link>
                <Link className='text-xl hover:text-white' to='/blogs'>Blogs</Link>
                <Link className='text-xl hover:text-white' to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;