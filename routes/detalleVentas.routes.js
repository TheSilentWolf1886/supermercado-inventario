const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleVentas.controller');

router.get('/', detalleVentaController.getDetallesVenta);
router.get('/:id', detalleVentaController.getDetalleVentaById);
router.post('/', detalleVentaController.createDetalleVenta);
router.put('/:id', detalleVentaController.updateDetalleVenta);
router.delete('/:id', detalleVentaController.deleteDetalleVenta);

module.exports = router;
