import { Router } from "express";
import { getAllProducts, searhProducts , getProductById} from "../controllers/products.controllers.js";

const router = Router();



// Obtener todos los productos o filtrar por category
router.get('/products', getAllProducts);

// Obtener producto por el nombre
router.get('/products/search', searhProducts);

// Obtener producto por Id
router.get('/products/:id', getProductById);

export default router;