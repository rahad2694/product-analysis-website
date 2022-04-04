import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowReview.css';

const ShowReview = (props) => {
    const { feedback, image, name, rating } = props.item;
    return (
        <div className='single-review-container  shadow-lg shadow-gray-300 border p-5'>
            <div className='flex justify-center'>
                <img src={image} alt="" />
            </div>
            <h1 className='text-2xl mt-2 mb-1 font-bold'>{name}</h1>
            <p>Rated: {rating} <span className='text-amber-400'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {(rating%2===0 || rating ===3 || rating ===5)? <></> : <FontAwesomeIcon icon={faStarHalfStroke}></FontAwesomeIcon> }</span></p>
            <p>"{feedback}"</p>
        </div>
    );
};

export default ShowReview;