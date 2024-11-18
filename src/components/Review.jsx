
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Review = () => {
    const { review } = useLoaderData()


    return (
        <div className='grid grid-cols-4 gap-5 '>
            {
                review.map(rev => <div key={rev.reviewId} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3 items-center'>
                            <img className='w-8 h-8 rounded-full' src={rev.userImg} alt="" />
                            <h2 className="card-title">{rev.name}</h2>
                            <p className='text-sm'>Date: {new Date().toDateString()}</p>
                        </div>
                        <p>{rev.review}</p>

                    </div>
                </div>)
            }
        </div >
    );
};

export default Review;