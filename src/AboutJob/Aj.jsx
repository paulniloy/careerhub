import React, { useEffect, useState } from 'react';
import { getdatafromlocal} from '../functions';
import Show from '../detailsshow/Show';
import { useLoaderData } from 'react-router-dom';

const Aj = () => {

    const products = useLoaderData()

    const [cart, setcart] = useState([])
    useEffect(() => {
        let arr = [];
        const savedproduct = getdatafromlocal()
        for (const id in savedproduct) {
            const found = products.find(product => product.id === id)
            if (found) {
                arr.push(found)
            }
        }
        setcart(arr)
    }, [])

    const [filtered, setfiltered] = useState([])
    useEffect(()=>{
        let array = [];
       cart.filter(product=>{
            if(product.distance === "Remote"){
                array.push(product)
            }
        })
        setfiltered(array)
    },[])
    const [onsite, setonsite] = useState([])
    useEffect(()=>{
        let arrr = [];
       cart.filter(product=>{
            if(product.distance === "Onsite"){
                arrr.push(product)
            }
        })
        setonsite(arrr)
    },[])


    return (
        <div>
            <div>
                <h1 className='text-center text-5xl font-bold mt-20 bg-indigo-100 p-5'>Applied Job</h1>
            </div>
            <div className='flex justify-center gap-10 mt-10'>
                <button onClick={()=>setcart(filtered)} className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto'>Remote</button>
                <button onClick={()=>setcart(onsite)} className='bg-indigo-400 hover:bg-indigo-600 p-2 rounded-xl text-white mb-auto'>Onsite</button>
            </div>
            {
                cart.map(cart => <Show key={cart.id} cart={cart}></Show>)
            }
        </div>
    );
};

export default Aj;