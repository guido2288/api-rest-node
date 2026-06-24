import express from 'express';
import {notFoundHandler} from './src/middlewares/middlewares.js';
const app = express();

// Middlewares
app.use( notFoundHandler );

app.get('/', (req, res) => {
    res.send('Home')
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));