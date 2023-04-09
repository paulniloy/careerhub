import React from 'react';
import { BeakerIcon, CommandLineIcon, ComputerDesktopIcon, CreditCardIcon, CurrencyDollarIcon, DocumentChartBarIcon } from '@heroicons/react/24/solid'

const Front = () => {
    return (
        <div>
            <div className='flex justify-evenly items-center mt-20'>
                <div className=''>
                    <h1 className='text-4xl font-bold'>Dream job<br /> Can be <span className='text-blue-700'>achieve</span> <br />Through hard work</h1>
                    <h3 className='mt-5'>Welcome to our page to search your dream Job and <br /> stay connected.. Challenge yourself and succeed in life.</h3>

                </div>
                <div>
                    <img className='w-96 hover:scale-110 duration-1000' src="man.jpg" alt="" srcset="" />
                </div>
            </div>
            <div className='mt-40'>
                <div className='flex justify-center'>
                    <div className='flex flex-col items-center mr-5 duration-500 hover:bg-indigo-200 p-5 hover:rounded-xl'>
                        <CommandLineIcon className='w-10 fill-indigo-400'></CommandLineIcon>
                        <h1 className='font-bold'>Software Eng.</h1>
                        <h1 className='font-thin'>400+ jobs available</h1>
                    </div>
                    <div className='mr-5 flex flex-col items-center duration-500 hover:bg-indigo-200 p-5 hover:rounded-xl'>
                        <CreditCardIcon className='w-10 fill-indigo-400'></CreditCardIcon>
                        <h1 className='font-bold'>Accounting</h1>
                        <h1 className='font-thin'>300+ jobs available</h1>
                    </div>
                    <div className='mr-5 flex flex-col items-center duration-500 hover:bg-indigo-200 p-5 hover:rounded-xl'>
                    <ComputerDesktopIcon className='w-10 fill-indigo-400'></ComputerDesktopIcon>
                        <h1 className='font-bold'>Data Analysist</h1>
                        <h1 className='font-thin'>150+ jobs available</h1>
                    </div>
                    <div className='flex flex-col items-center duration-500 hover:bg-indigo-200 p-5 hover:rounded-xl'>
                        <CurrencyDollarIcon className='w-10 fill-indigo-400'></CurrencyDollarIcon>
                        <h1 className='font-bold'>Lawyer</h1>
                        <h1 className='font-thin'>100+ jobs available</h1>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center mt-20'>Featured Jobs</h1>
                <h1 className='text-center font-thin mt-2'>Here are listed some Jobs details you need to know in future</h1>
            </div>
        </div>
    );
};

export default Front;