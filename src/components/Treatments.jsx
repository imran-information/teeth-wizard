import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Card from './Card';

const Treatments = () => {
    const { services } = useLoaderData()


    return (
        <>
            <div className='mt-10 grid grid-cols-4 gap-5'>
                {
                    services.slice(0, 4).map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
            <button className='btn btn-primary block mx-auto mt-10'><NavLink to='/allTreatments' >More Services</NavLink ></button>
        </>
    );
};

export default Treatments;