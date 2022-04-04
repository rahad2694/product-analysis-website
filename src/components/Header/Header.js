import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div className='bg-orange-400 py-3'>
            <div>
                <h1 className='text-3xl font-bold text-white'>BD Cycle Repair <FontAwesomeIcon icon={faScrewdriverWrench} /></h1>
            </div>
            <nav>
            
            </nav>
        </div>
    );
};

export default Header;