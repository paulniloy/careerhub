import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';

const Head = () => {
    return (
        <nav id='background' className='p-5 flex justify-around items-center'>
            <div>
                <h1 className='text-3xl font-bold'>CareerCoder</h1>
            </div>
            <div className='p-5 font-medium'>
                <Link className='mr-5' to="/">home</Link>
                <Link className='mr-5' to="/stat">Statistic</Link>
                <Link className='mr-5' to="/aj">Applied Job</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div className='flex bg-indigo-400 items-center rounded-xl hover:bg-indigo-600 px-5'>
                <div>
                <button className='-mx-5 p-5  rounded-xl font-bold text-white'>Apply</button>
                </div>
                <div>
                    <ArrowSmallRightIcon className='w-8 fill-white'></ArrowSmallRightIcon>
                </div>
            </div>
        </nav>
    );
};

export default Head;