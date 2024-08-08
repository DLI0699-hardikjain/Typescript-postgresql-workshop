import Product from "./models/Product";
const readlineSync = require("readline-sync");
import { productServices } from "./services/productServices";
import getData from "./services/getData";
import logger from "./logs/logger";

let products: Product[] = [];

async function main() {
  try {
    products = await getData();
    logger.info("Data fetched successfully");

    let choice: number = 0;

    while (choice !== 5) {
      console.log("1. Display all products");
      console.log("2. Search product");
      console.log("3. Add product");
      console.log("4. Delete product");
      console.log("5. Exit");
      choice = readlineSync.questionInt("Enter your choice: ");
      switch (choice) {
        case 1:
          productServices.displayProducts(products);
          break;
        case 2:
          products = productServices.searchProduct(
            products,
            readlineSync.question("Enter product name: ")
          );
          break;
        case 3:
          products = productServices.addProduct(
            products,
            new Product(
              readlineSync.questionInt("Enter product id: "),
              readlineSync.question("Enter product name: "),
              readlineSync.questionInt("Enter product price: "),
              readlineSync.question("Enter product description: "),
              readlineSync.question("Enter product category: "),
              readlineSync.question("Enter product brand: ")
            )
          );
          break;
        case 4:
          products = productServices.searchProduct(
            products,
            readlineSync.question("Enter product name to delete: ")
          );
          break;
        case 5:
          console.log("Exiting...");
          break;
        default:
          console.log("Invalid choice");
      }
    }
  } catch (error : any) {
    console.log(error.message);
    logger.error(error.message);
  }
}

main();
