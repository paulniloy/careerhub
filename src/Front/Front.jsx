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
    const [slice, setslice] = useState([])
    useEffect(()=>{
        fetch('chatdata.json')
        .then(res=>res.json())
        .then(data=>setslice(data))
    },[])

        const [loaddata, setloaddata] = useState([])
        useEffect(()=>{
            fetch('dev.json')
            .then(res=>res.json())
            .then(data=>setloaddata(data))
        },[])

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-20'>
                <div className='mb-10'>
                    <h1 className='text-4xl font-bold'>Dream job<br /> Can be <span className='text-blue-700'>achieve</span> <br />Through hard work</h1>
                    <h3 className='mt-5'>Welcome to our page to search your dream Job and <br /> stay connected.. Challenge yourself and succeed in life.</h3>
                    <button className='bg-indigo-400 hover:bg-indigo-600 mt-5 p-5 rounded-xl font-bold text-white'>Get started</button>

                </div>
                <div>
                    <img className='w-96 hover:scale-110 duration-1000' src="man.jpg" />
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
                    slice.map(info=> <User key={info.id} info={info}></User>)
                }
                {/* {
                    (slice === true) ? `${slice.map(info=><User key={info.id} info={info}></User>)}` : `${loaddata.map(info=><User key={info.id} info={info}></User>)}`
                } */}
            </div>
            <div className={slice.length > 4 ? "hidden" : "tex-blue"}>
            <div className='flex justify-center'>
            <button onClick={()=>setslice(loaddata)} className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto  '>show all</button>
            </div>
            </div>
        </div>
    );
};

export default Front;