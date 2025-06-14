import express, { Router } from "express";
import productoController from '../controllers/productoController.js';

const router = express.Router();{}

router.get("/",productoController.getAllProductos);

export default router;