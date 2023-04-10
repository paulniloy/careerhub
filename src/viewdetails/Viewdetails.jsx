import { BoltIcon, CurrencyDollarIcon, EnvelopeIcon, PaperAirplaneIcon, PhoneIcon, PowerIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewdetails = () => {
    const infos = useLoaderData()
    const { des, res, edu, phone, address, email, experiences, salary, position } = infos[0]
    return (
        <div>
            <h1 className='text-center text-5xl font-bold mt-20 bg-indigo-100 p-5'>Job Informations</h1>
            <div className='flex justify-evenly mt-20 mb-20'>
                <article className='w-1/2'>
                    <div>
                        <h1 className='font-bold'>Job Description :</h1>
                        <h1>{des}</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>Job Responsibility :</h1>
                        <h1>{res}</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>Educational Requirements :</h1>
                        <h1>{edu}</h1>
                    </div>
                    <div>
                        <h1 className='font-bold'>Experieces :</h1>
                        <h1>{experiences}</h1>
                    </div>
                </article>
                <article>
                    <h1>Job Details</h1>
                    <hr />
                    <div className='mt-5 mb-5 p-2'>
                        <article className='flex'>
                            <div>
                                <CurrencyDollarIcon className='w-6 fill-indigo-400'></CurrencyDollarIcon>
                            </div>
                            <div>
                                <h1>Salary: {salary}</h1>
                            </div>
                        </article>
                        <article className='flex'>
                            <div>
                                <BoltIcon className='w-6 fill-indigo-400'></BoltIcon>
                            </div>
                            <div>
                                <h1>Job Title: {position}</h1>
                            </div>
                        </article>
                    </div>
                    <h1>Contact Information :</h1>
                    <div className='mt-5 p-2'>
                        <article className='flex'>
                            <div>
                                <PhoneIcon className='w-6 fill-indigo-400'></PhoneIcon>
                            </div>
                            <div>
                                <h1>Phone : {phone}</h1>
                            </div>
                        </article>
                        <article className='flex'>
                            <div>
                                <EnvelopeIcon className='w-6 fill-indigo-400'></EnvelopeIcon>
                            </div>
                            <div>
                                <h1>Email : {email}</h1>
                            </div>
                        </article>
                        <article className='flex'>
                            <div>
                                <PaperAirplaneIcon className='w-6 fill-indigo-400'></PaperAirplaneIcon>
                            </div>
                            <div>
                                <h1>Address : {address}</h1>
                            </div>
                        </article>
                    </div>
            <button className='bg-indigo-200 w-full p-2 mt-5 border border-blue-800 rounded-lg hover:bg-indigo-600 hover:text-white'>Apply Now</button>
                </article>
            </div>
        </div>
    );
};

export default Viewdetails;