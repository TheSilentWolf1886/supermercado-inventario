const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventas.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Venta:
 *       type: object
 *       required:
 *         - fecha
 *         - cliente_id
 *         - total
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la venta
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha de la venta
 *         cliente_id:
 *           type: integer
 *           description: ID del cliente asociado a la venta
 *         total:
 *           type: number
 *           format: float
 *           description: Monto total de la venta
 *       example:
 *         id: 1
 *         fecha: "2025-03-30T14:30:00Z"
 *         cliente_id: 5
 *         total: 150.75
 */

/**
 * @swagger
 * /models/venta:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Venta]
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 */
router.get('/', ventaController.getVentas);

/**
 * @swagger
 * /models/venta/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Venta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 */
router.get('/:id', ventaController.getVentaById);

/**
 * @swagger
 * /models/venta:
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Venta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       201:
 *         description: Venta creada exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/', ventaController.createVenta);

/**
 * @swagger
 * /models/venta/{id}:
 *   put:
 *     summary: Actualizar una venta por ID
 *     tags: [Venta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta actualizada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.put('/:id', ventaController.updateVenta);

/**
 * @swagger
 * /models/venta/{id}:
 *   delete:
 *     summary: Eliminar una venta por ID
 *     tags: [Venta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta eliminada exitosamente
 *       404:
 *         description: Venta no encontrada
 */
router.delete('/:id', ventaController.deleteVenta);

module.exports = router;
