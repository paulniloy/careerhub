import React from 'react';
const Features = ({inf}) => {
    const {title, info, pic} = inf
    return (
        <div>
            <div className=''>
                    <div className='mr-5 duration-500 hover:bg-indigo-200 hover:rounded-xl flex flex-col items-center'>
                        <img className='w-6 mt-6' src={pic} />
                        {/* <CommandLineIcon className='w-10 fill-indigo-400'></CommandLineIcon> */}
                        <h1 className='font-bold'>{title}</h1>
                        <h1 className='font-thin md:text-center'>{info}</h1>
                    </div>
            </div>
        </div>
    );
};

export default Features;