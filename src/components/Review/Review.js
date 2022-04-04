import useReviews from '../../hooks/useReviews';
import ShowReview from '../ShowReview/ShowReview';

const Review = () => {
    const [review , setReview] = useReviews();
    // console.log(review);
    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-5'>Our Best Customers (All)</h1>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-5'>
                {
                    review.map(item => <ShowReview key={item.id} item={item}></ShowReview>)
                }
            </div>
        </div>
    );
};


export default Review;