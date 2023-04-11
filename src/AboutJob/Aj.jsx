import React, { useEffect, useState } from 'react';
import { getdatafromlocal } from '../functions';
import { useLoaderData } from 'react-router-dom';
import Show from '../detailsshow/Show';

const Aj = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('dev.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    console.log(products);
    const savedproduct = getdatafromlocal()
    console.log(savedproduct);
    let cart = [];
    for (const id in savedproduct) {
        const found = products.find(product => product.id === id)
        if (found) {
            cart.push(found)
        }
    }



    return (
        <div>
            <div>
                <h1 className='text-center text-5xl font-bold mt-20 bg-indigo-100 p-5'>Applied Job</h1>
            </div>
            <div className='flex justify-center gap-10 mt-10'>
                <button className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto'>Remote</button>
                <button className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto'>Onsite</button>
            </div>
            {
                cart.map(cart => <Show products={products} key={cart.id} cart={cart}></Show>)
            }
        </div>
    );
};

export default Aj;