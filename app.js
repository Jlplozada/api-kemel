import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import productoRoutes from './src/routes/productosRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/productos',productoRoutes);
// app.get('/productos',productoRoutes)
app.get('/', (req, res) => {
  res.send('Prueba del servidor api para los datos del host 4001 ');
});

app.listen(4000);