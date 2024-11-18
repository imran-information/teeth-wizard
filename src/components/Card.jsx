import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ service }) => {
    const { id, treatment, image, description, cost } = service
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure>
                <img className='h-60'
                    src={image}
                    alt="treatment image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{treatment}</h2>
                <p title={description}>{description.slice(0, 100)}...</p>
                <p className='text-base font-semibold'>Cost: ${cost}</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}>
                        <button className="btn btn-primary">Check out more</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Card;