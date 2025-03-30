const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productos.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - precio
 *         - stock
 *         - categoria_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del producto
 *         nombre:
 *           type: string
 *           description: Nombre del producto
 *         descripcion:
 *           type: string
 *           description: Descripción del producto (puede ser un texto largo)
 *         precio:
 *           type: number
 *           format: float
 *           description: Precio del producto
 *         stock:
 *           type: integer
 *           description: Cantidad disponible en inventario
 *         categoria_id:
 *           type: integer
 *           description: ID de la categoría a la que pertenece el producto
 *       example:
 *         id: 1
 *         nombre: "Laptop Dell"
 *         descripcion: "Laptop con procesador Intel i7 y 16GB RAM"
 *         precio: 1500.99
 *         stock: 10
 *         categoria_id: 3
 */

/**
 * @swagger
 * /models/producto:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
router.get('/', productoController.getProductos);

/**
 * @swagger
 * /models/producto/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', productoController.getProductoById);

/**
 * @swagger
 * /models/producto:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', productoController.createProducto);

/**
 * @swagger
 * /models/producto/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       404:
 *         description: Producto no encontrado
 */

router.put('/:id', productoController.updateProducto);

/**
 * @swagger
 * /models/producto/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/:id', productoController.deleteProducto);

module.exports = router;
