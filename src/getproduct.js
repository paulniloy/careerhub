import { getdatafromlocal } from "./functions";

const getproductvalue = async() => {
    const productdata = await fetch('dev.json');
    const products = await productdata.json();
    let arr = [];
    const savedproduct = getdatafromlocal();
    console.log(savedproduct);
    for (const id in savedproduct) {
        const found = products.find(product => product.id === id);
        if (found) {
            arr.push(found);
        }
    }
    return arr
}


    const onsite = (cart) => {
        let onsitearray = [];
        const onsited = cart.filter(pro => pro.distance === "Onsite");
        onsitearray.push(onsited);
        return onsitearray
    }

        const remote = (cart) => {
        let remotearray = [];
        const remoted = cart.filter(rem => rem.distance === "Remote");
        remotearray.push(remoted);
        return remotearray
    }

export { getproductvalue , onsite, remote}