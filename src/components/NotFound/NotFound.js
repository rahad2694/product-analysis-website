import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-3xl text-red-500 mt-10'><FontAwesomeIcon icon={faXmarkSquare}></FontAwesomeIcon> 404 Not Found <FontAwesomeIcon icon={faXmarkSquare}></FontAwesomeIcon></h1>
            <div className='flex justify-center'>
                <img className='w-2/4' src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?t=st=1649084712~exp=1649085312~hmac=8fa94a9e7e270aea4462977d8c60ce03c3cff45e8202a436c20141cd496d80db&w=740" alt="" />
            </div>
        </div>
    );
};

export default NotFound;