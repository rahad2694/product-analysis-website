import { faBars, faScrewdriverWrench, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menu, setMenu] = useState(true);
    const handleMenu = (res) => {
        setMenu(res);
    }
    return (
        <div className='bg-orange-400 py-3 grid grid-cols-2 px-2 sticky top-0 header-top'>
            <div className='flex md:justify-start justify-center '>
                <h1 className='text-3xl font-bold text-white cursor-pointer'>BD Cycle Repair <FontAwesomeIcon icon={faScrewdriverWrench} /></h1>
            </div>
            <div className='lg:flex lg:justify-end'>
                <div className='flex justify-end'>
                    <button className='lg:hidden text-3xl text-white' onClick={() => handleMenu(!menu)}>{menu ? <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> : <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>}</button>
                </div>
                <nav className= {`mt-8 md:mt-0 absolute right-px lg:block ${menu?'hidden':'static'}`}>
                    <ul onClick={() => handleMenu(!menu)} className='lg:flex lg:justify-end align-middle my-6 lg:my-0'>
                        <li className='my-3'><Link className='bg-orange-400 px-3 py-1 rounded-xl text-md hover:text-white' to='/home'>Home</Link></li>
                        <li className='my-3'><Link className='bg-orange-400 px-3 py-1 rounded-xl text-md hover:text-white'  to='/reviews'>Reviews</Link></li>
                        <li className='my-3'><Link className='bg-orange-400 px-3 py-1 rounded-xl text-md hover:text-white'  to='/dashboard'>Dashboard</Link></li>
                        <li className='my-3'><Link className='bg-orange-400 px-3 py-1 rounded-xl text-md hover:text-white' to='/blogs'>Blogs</Link></li>
                        <li className='my-3'><Link className='bg-orange-400 px-3 py-1 rounded-xl text-md hover:text-white'  to='/about'>About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;