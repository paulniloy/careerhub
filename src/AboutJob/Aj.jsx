import React, { useEffect, useState } from 'react';
import { getdatafromlocal } from '../functions';
import { useLoaderData } from 'react-router-dom';
import Show from '../detailsshow/Show';

const Aj = () => {
    const [products, setproducts] = useState([])
    useEffect(()=>{
        fetch('dev.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    console.log(products);
    const savedproduct = getdatafromlocal()
    console.log(savedproduct);
    let cart = [];
    for(const id in savedproduct){
        const found = products.find(product=> product.id === id)
        if(found){
            cart.push(found)
        }
    }



    return (
        <div>
            {
                cart.map(cart=> <Show key={cart.id} cart={cart}></Show>)
            }
        </div>
    );
};

export default Aj;