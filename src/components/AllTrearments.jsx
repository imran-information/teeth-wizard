import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const AllTrearments = () => {
    const services = useLoaderData()
    console.log(services);

    return (
        <div className='mt-32'>
            
            <div className='mt-10 grid grid-cols-4 gap-5'>
                {
                    services.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default AllTrearments;