const addtocart = (details)=>{
    let cart = {};
    const getdata = localStorage.getItem('cart')
    if(getdata){
        cart = JSON.parse(getdata);
    }
    const quantity = cart[details.id]
    if(quantity){
        const newquantity = quantity + 1;
        cart[details.id] = newquantity;
    }
    else{
        cart[details.id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    return {details}

}

const getdatafromlocal = () =>{
    let cartdata = {};
    const storeddata = localStorage.getItem('cart');
    if(storeddata){
        cartdata = JSON.parse(storeddata)
    }
    return cartdata
}

const cartloader = async()=>{
    let cart = [];
   const loadproduct = await fetch('dev.json');
    const product = await loadproduct.json();
    const savedcart = getdatafromlocal()
    console.log(savedcart);
    for(let id in savedcart){
        const previous = product.find(pd=> pd.id === id);
        cart.push(previous)
        console.log(cart);
    }
    console.log(product);
    return {product, cart}
}

const splitdata = async()=>{
    const load = await fetch('dev.json');
    const data = await load.json();
    return showlimited(data)
}
const showlimited =  (data) =>{
    if(data.length>4){
        const sliced = data.slice(0,4)
    }
    return sliced
}

const filter=(distance)=>{
    console.log(distance);
}

export {addtocart, cartloader, getdatafromlocal, splitdata, showlimited, filter}