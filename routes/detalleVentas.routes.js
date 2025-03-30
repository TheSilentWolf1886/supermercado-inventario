const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleVentas.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     DetalleVenta:
 *       type: object
 *       required:
 *         - venta_id
 *         - producto_id
 *         - cantidad
 *         - subtotal
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del detalle de venta
 *         venta_id:
 *           type: integer
 *           description: ID de la venta asociada
 *         producto_id:
 *           type: integer
 *           description: ID del producto vendido
 *         cantidad:
 *           type: integer
 *           description: Cantidad del producto vendido
 *         subtotal:
 *           type: number
 *           format: decimal
 *           description: Subtotal de la venta
 *       example:
 *         id: 1
 *         venta_id: 101
 *         producto_id: 202
 *         cantidad: 3
 *         subtotal: 45.99
 */

/**
 * @swagger
 * /models/detalleventa:
 *   get:
 *     summary: Obtener todos los detalles de venta
 *     tags: [DetalleVenta]
 *     responses:
 *       200:
 *         description: Lista de detalles de venta
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DetalleVenta'
 */
router.get('/', detalleVentaController.getDetallesVenta);

/**
 * @swagger
 * /models/detalleventa/{id}:
 *   get:
 *     summary: Obtener un detalle de venta por ID
 *     tags: [DetalleVenta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del detalle de venta
 *     responses:
 *       200:
 *         description: Detalle de venta encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 *       404:
 *         description: Detalle de venta no encontrado
 */
router.get('/:id', detalleVentaController.getDetalleVentaById);

/**
 * @swagger
 * /models/detalleventa:
 *   post:
 *     summary: Crear un nuevo detalle de venta
 *     tags: [DetalleVenta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetalleVenta'
 *     responses:
 *       201:
 *         description: Detalle de venta creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetalleVenta'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', detalleVentaController.createDetalleVenta);

/**
 * @swagger
 * /models/detalleventa/{id}:
 *   put:
 *     summary: Actualizar un detalle de venta por ID
 *     tags: [DetalleVenta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del detalle de venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DetalleVenta'
 *     responses:
 *       200:
 *         description: Detalle de venta actualizado exitosamente
 *       404:
 *         description: Detalle de venta no encontrado
 */
router.put('/:id', detalleVentaController.updateDetalleVenta);

/**
 * @swagger
 * /models/detalleventa/{id}:
 *   delete:
 *     summary: Eliminar un detalle de venta por ID
 *     tags: [DetalleVenta]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del detalle de venta
 *     responses:
 *       200:
 *         description: Detalle de venta eliminado exitosamente
 *       404:
 *         description: Detalle de venta no encontrado
 */
router.delete('/:id', detalleVentaController.deleteDetalleVenta);

module.exports = router;
