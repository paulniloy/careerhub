import React from 'react';
import { BuildingLibraryIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
// import { filter } from '../functions';

const Show = ({ cart }) => {
    const { id, image, position, shortform, location, salary, distance } = cart;


    return (
        <div>
            <div className='mx-auto justify-center mt-40 flex items-center mb-10'>
            <div className='flex items-center gap-5 -mt-20'>
                <div>
                    <img className='md:w-40 w-20' Src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='font-bold'>{position}</h1>
                        <h1>{shortform}</h1>
                    </div>
                    <div className='text-white mt-2 mb-2 flex gap-5'>
                    <button className=' text-indigo-400  hover:bg-indigo-600 p-2 rounded-xl hover:text-white border border-indigo-600'>{distance}</button>
                        <button className='text-indigo-400 hover:bg-indigo-600 hover:text-white p-2 rounded-xl border border-indigo-600'>Full Time</button>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 mb-5'>
                        <div className='flex'>
                            <BuildingLibraryIcon className='w-6'></BuildingLibraryIcon>
                            {location}
                        </div>
                        <div className='flex'>
                            <CurrencyDollarIcon className='w-6'></CurrencyDollarIcon>
                            {salary}
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-5'>
                <Link to={`/viewdetails/${id}`} className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto'>View Details</Link>
            </div>
        </div>
        </div>
    );
};

export default Show;