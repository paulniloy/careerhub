import React, { useEffect, useState } from 'react';
import Features from '../Features/Features';

const Front = () => {
    const [info, setinfo] = useState([]);
    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setinfo(data))
    },[])
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
            <div className='mt-40 grid grid-cols-4 w-3/4 mx-auto gap-40'>
                {
                    info.map(information=> <Features key={information.id} information={information}></Features>)
                }
            </div>
            <div>
                <h1 className='text-6xl font-bold text-center mt-20'>Featured Jobs</h1>
                <h1 className='text-center font-thin mt-2'>Here are listed some Jobs details you need to know in future</h1>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <h1></h1>
                    <div>
                        <button></button><button></button>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Front;