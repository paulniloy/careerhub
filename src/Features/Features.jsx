import React from 'react';
const Features = ({information}) => {
    const {title, info, pic} = information
    console.log(pic)
    return (
        <div>
            <div className='flex justify-center'>
                    <div className='mr-5 duration-500 hover:bg-indigo-200 hover:rounded-xl flex flex-col items-center'>
                        <img className='w-6' src={pic} alt="" />
                        {/* <CommandLineIcon className='w-10 fill-indigo-400'></CommandLineIcon> */}
                        <h1 className='font-bold'>{title}</h1>
                        <h1 className='font-thin'>{info}</h1>
                    </div>
            </div>
        </div>
    );
};

export default Features;