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
    }
    return {product, cart}
}

const splitdata = (data)=>{
    const slice = data.slice(0,4)
    console.log(slice);
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

const getproductdata=()=>{
    fetch('dev.json')
    .then(res=>res.json())
    .then(data=> data);
}



export {addtocart, cartloader, getdatafromlocal, splitdata, showlimited, filter, getproductdata}