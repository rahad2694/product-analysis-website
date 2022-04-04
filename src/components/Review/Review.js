import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';

const Review = () => {
    const [review , setReview] = useState([]);
    useEffect(()=>{
        fetch('reviewData.json')
        .then(res => res.json())
        .then(data => setReview(data));
    },[]);
    console.log(review);
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-5'>Our Best Customers (All)</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    review.map(item => <ShowReview key={item.id} item={item}></ShowReview>)
                }
            </div>
        </div>
    );
};


export default Review;