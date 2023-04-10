import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewdetails = () => {
    const data = useLoaderData()
    console.log(data)
    const {id} = data
    return (
        <div>
            hello there {id}
        </div>
    );
};

export default Viewdetails;