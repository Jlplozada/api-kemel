import express from "express";
import productoController from '../controllers/productoController.js';

const router = express.Router();

router.get("/",productoController.getAllProductos);

router.get('/:id',productoController);

router.post('/',camposProducto,productoController);

router.put('/:id',camposProducto,productoController);

router.patch('/:id',parcialesProducto,productoController);

router.delete('/:id',productoController);

export default router;