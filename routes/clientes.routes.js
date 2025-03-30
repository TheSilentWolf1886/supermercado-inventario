const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientes.controller');

/**
 * @swagger
 * tags:
 *   name: cliente
 *   description: Endpoints para gestionar cliente
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cliente:
 *       type: object
 *       required:
 *         - nombre
 *         - email
 *         - telefono
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del cliente
 *         nombre:
 *           type: string
 *           description: Nombre del cliente
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del cliente
 *         telefono:
 *           type: string
 *           description: Teléfono del cliente
 *       example:
 *         id: 1
 *         nombre: "Juan Pérez"
 *         email: "juan@example.com"
 *         telefono: "123456789"
 */

/**
 * @swagger
 * /models/cliente:
 *   get:
 *     summary: Obtener todos los cliente
 *     tags: [Cliente]
 *     responses:
 *       200:
 *         description: Lista de cliente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cliente'
 */
router.get('/', clienteController.getClientes);

/**
 * @swagger
 * /models/cliente/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     tags: [cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cliente'
 *       404:
 *         description: Cliente no encontrado
 */
router.get('/:id', clienteController.getClienteById);

/**
 * @swagger
 * /models/cliente:
 *   post:
 *     summary: Crear un nuevo cliente
 *     tags: [cliente]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente creado
 *       400:
 *         description: Datos inválidos
 */
router.post('/', clienteController.createCliente);

/**
 * @swagger
 * /models/cliente/{id}:
 *   put:
 *     summary: Actualizar un cliente por ID
 *     tags: [cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente actualizado correctamente
 *       404:
 *         description: Cliente no encontrado
 */
router.put('/:id', clienteController.updateCliente);

/**
 * @swagger
 * /models/cliente/{id}:
 *   delete:
 *     summary: Eliminar un cliente por ID
 *     tags: [cliente]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del cliente a eliminar
 *     responses:
 *       200:
 *         description: Cliente eliminado correctamente
 *       404:
 *         description: Cliente no encontrado
 */
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
