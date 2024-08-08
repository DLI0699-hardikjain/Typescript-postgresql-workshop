import Product from '../models/Product';
import logger from '../logs/logger';
import addData from './addData';
import deleteData from './deleteData';
const readlineSync = require('readline-sync');


function displayProducts(products: Product[]) : void {
    console.log("Displaying all products");
    products.forEach((product) => {
        console.log(product);
    });
    logger.info("All products displayed");
}

function deleteProduct(product: Product, products: Product[]) : Product[] {
    if(readlineSync.keyInYN("Do you want to remove this product?")) {
        try {
            if(!product.available) throw new Error("Product is not available");
            product.available = false;
            deleteData(product.id);
            console.log("Product removed successfully");
            return products.filter((prod) => prod.id !== product.id);
        }
        catch(error: any) {
            console.log(error.message);
            logger.error(error.message);
        }
        logger.info("Product removed");
    }
    return products;
}

function searchProduct(products: Product[], productName: string) : Product[] {
    console.log("Searching for product: " + productName);
    try {
        let product = products.find((product) => product.name === productName);
        if(!product) throw new Error("Product not found");
        console.log(product);
        products = deleteProduct(product, products);
    }
    catch(error : any) {
        logger.error(error.message);
        console.log(error.message);
    }
    logger.info("Product searched");
    return products;
}

function addProduct(products: Product[], product: Product) : Product[] {
    console.log("Adding product: " + product.name);
    addData(product);
    logger.info("Product added");
    return [...products, product];
}

export const productServices = {
    displayProducts,
    searchProduct,
    addProduct,
    deleteProduct
}