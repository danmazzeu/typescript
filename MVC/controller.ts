import express, { Request, Response } from 'express';
import { Product } from './Product'; // Imports the Product model

const products: Product[] = []; // Array to store products

const productRouter = express.Router();

// Route to create a new product
productRouter.post('/', (req: Request, res: Response) => {
    const { id, name, price, description } = req.body;
    const newProduct = new Product(id, name, price, description);
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Route to get all products
productRouter.get('/', (req: Request, res: Response) => {
    res.json(products);
});

// ... other routes to get, update, and delete products

export default productRouter;