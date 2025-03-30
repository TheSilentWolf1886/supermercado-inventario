const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedores.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Proveedor:
 *       type: object
 *       required:
 *         - nombre
 *         - contacto
 *         - direccion
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del proveedor
 *         nombre:
 *           type: string
 *           description: Nombre del proveedor
 *         contacto:
 *           type: string
 *           description: Información de contacto del proveedor
 *         direccion:
 *           type: string
 *           description: Dirección del proveedor
 *       example:
 *         id: 1
 *         nombre: "Distribuidora ABC"
 *         contacto: "+57 123 456 7890"
 *         direccion: "Calle 10 #5-30, Pasto"
 */

/**
 * @swagger
 * /models/proveedor:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedor]
 *     responses:
 *       200:
 *         description: Lista de proveedores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proveedor'
 */
router.get('/', proveedorController.getProveedores);

/**
 * @swagger
 * /models/proveedor/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: Proveedor no encontrado
 */
router.get('/:id', proveedorController.getProveedorById);

/**
 * @swagger
 * /models/proveedor:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedor]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       201:
 *         description: Proveedor creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', proveedorController.createProveedor);

/**
 * @swagger
 * /models/proveedor/{id}:
 *   put:
 *     summary: Actualizar un proveedor por ID
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       200:
 *         description: Proveedor actualizado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.put('/:id', proveedorController.updateProveedor);

/**
 * @swagger
 * /models/proveedor/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por ID
 *     tags: [Proveedor]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proveedor
 *     responses:
 *       200:
 *         description: Proveedor eliminado exitosamente
 *       404:
 *         description: Proveedor no encontrado
 */
router.delete('/:id', proveedorController.deleteProveedor);

module.exports = router;
