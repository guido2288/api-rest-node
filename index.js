import express from 'express';
import {notFoundHandler} from './src/middlewares/error.middlewares.js';
import productsRouter from './src/routes/products.routes.js';

const app = express();

// Rutas de productos
app.use('/api/v1', productsRouter);

// Middlewares
app.use( notFoundHandler );

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));