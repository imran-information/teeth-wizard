import React from 'react';
import img from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 mt-40 p-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={img}
                        className="w-full rounded-lg shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Teeth Wizard News!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;