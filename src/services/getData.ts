import Product from "../models/Product";

export default async function getData(){
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    console.log(data);
    return data;
}
