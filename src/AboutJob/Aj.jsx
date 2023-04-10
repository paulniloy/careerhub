import React from 'react';
import { getdatafromlocal } from '../functions';
import { useLoaderData } from 'react-router-dom';
import Show from '../detailsshow/Show';

const Aj = () => {
    const products = useLoaderData()
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