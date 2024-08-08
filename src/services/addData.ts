import Product from "../models/Product";

export default async function addData(product: Product) {
    const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    console.log("product added successfully");
}