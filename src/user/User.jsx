import { BuildingLibraryIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const User = ({ info }) => {
    const {image, position, shortform, location, salary} = info;

    return (
        <div className='mx-auto flex flex-col items-start mb-10'>
            <div>
                <img className='w-40' src={image} alt="" />
            </div>
            <div>
                <h1 className='font-bold'>{position}</h1>
                <h1>{shortform}</h1>
            </div>
            <div className='text-white mt-2 mb-2 flex gap-5'>
                <button className=' text-indigo-400  hover:bg-indigo-600 p-2 rounded-xl hover:text-white border border-indigo-600'>Remote</button>
                <button className='text-indigo-400 hover:bg-indigo-600 hover:text-white p-2 rounded-xl border border-indigo-600'>Full Time</button>
            </div>
            <div className='flex gap-5 mb-5'>
                <div className='flex'>
                    <BuildingLibraryIcon className='w-6'></BuildingLibraryIcon>
                    {location}
                </div>
                <div className='flex'>
                <CurrencyDollarIcon className='w-6'></CurrencyDollarIcon>
                    {salary}
                </div>
            </div>
            <div>
                <button className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto'>View details</button>
            </div>
        </div>
    );
};

export default User;