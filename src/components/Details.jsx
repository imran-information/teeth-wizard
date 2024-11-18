import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';

const Details = () => {
    const { cost, treatment, image, description } = useLoaderData()


    return (
        <div className="card bg-base-100 image-full h-[800px] shadow-xl mt-40">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="mx-auto text-2xl font-extrabold">{treatment}</h2>
                <p className='text-base w-96 mx-auto'>{description}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Details;