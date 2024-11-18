import React from 'react';
import Banner from './Banner';
import Treatments from './Treatments';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Treatments></Treatments>
            <h2 className='text-xl font-semibold text-center mt-10'>Review </h2>
            <Review></Review>
        </div>
    );
};

export default Home;