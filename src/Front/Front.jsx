import React, { useEffect, useState } from 'react';
import Features from '../Features/Features';
import { Link, useLoaderData } from 'react-router-dom';
import User from '../user/User';

const Front = () => {
    const [info, setinfo] = useState([]);
    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setinfo(data))
    },[info])

        const [loaddata, setloaddata] = useState([])
        useEffect(()=>{
            fetch('dev.json')
            .then(res=>res.json())
            .then(data=>setloaddata(data))
        },[])

        // const addtocart =(id)=>
        //     {
        //         console.log(id);
        //     }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-20'>
                <div className='mb-10'>
                    <h1 className='text-4xl font-bold'>Dream job<br /> Can be <span className='text-blue-700'>achieve</span> <br />Through hard work</h1>
                    <h3 className='mt-5'>Welcome to our page to search your dream Job and <br /> stay connected.. Challenge yourself and succeed in life.</h3>

                </div>
                <div>
                    <img className='w-96 hover:scale-110 duration-1000' src="man.jpg" alt="" srcset="" />
                </div>
            </div>
            <div className='mt-20 md:mt-40 grid md:grid-cols-4 w-3/4 mx-auto md:gap-40'>
                {
                    info.map(inf=> <Features key={inf.id} inf={inf}></Features>)
                }
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center mt-20'>Featured Jobs</h1>
                <h1 className='text-center font-thin mt-2'>Here are listed some Jobs details you need to know in future</h1>
            </div>
            <div className='grid md:grid-cols-2 mt-10'>
                {
                    loaddata.map(info=> <User key={info.id} info={info}></User>)
                }
            </div>
        </div>
    );
};

export default Front;