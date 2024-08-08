import Product from "./models/Product";
const readlineSync = require("readline-sync");
import { productServices } from "./services/productServices";

let products: Product[] = [];

function main() {
  /**
   * Todo: make a dummy data file and fetch data from there
   */
  products = [
    new Product(1, "Shirt", 1000, "A nice shirt", "Clothing", "Nike"),
    new Product(2, "Shoes", 2000, "A nice pair of shoes", "Footwear", "Adidas"),
    new Product(3, "Mobile", 10000, "A nice mobile", "Electronics", "Samsung"),
    new Product(4, "Laptop", 50000, "A nice laptop", "Electronics", "Dell"),
    new Product(5, "Watch", 5000, "A nice watch", "Accessories", "Titan"),
  ];
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
}

main();
