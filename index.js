import express from 'express';
import {notFoundHandler} from './src/middlewares/middlewares.js';
import productsRouter from './src/routes/products.routes.js';

const app = express();

// Rutas de productos
app.use('/api/v1', productsRouter);

app.get('/', (req, res) => {
  res.send('Home')
});

// Middlewares
app.use( notFoundHandler );

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));