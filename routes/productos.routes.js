const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productos.controller');

router.get('/', productoController.getProductos);
router.get('/:id', productoController.getProductoById);
router.post('/', productoController.createProducto);
router.put('/:id', productoController.updateProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;
