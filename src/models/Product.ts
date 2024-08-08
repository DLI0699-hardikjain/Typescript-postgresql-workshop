export default class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    available: boolean = true;
    constructor(id: number, name: string, price: number, description: string, category: string, brand: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.brand = brand;
    }
}