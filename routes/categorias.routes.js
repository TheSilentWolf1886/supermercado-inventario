const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categorias.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Categoria:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la categoría
 *         nombre:
 *           type: string
 *           description: Nombre de la categoría
 *       example:
 *         id: 1
 *         nombre: "Electrónica"
 */

/**
 * @swagger
 * /models/categoria:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Categoria]
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categoria'
 */
router.get('/', categoriaController.getCategorias);

/**
 * @swagger
 * /models/categoria/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       404:
 *         description: Categoría no encontrada
 */
router.get('/:id', categoriaController.getCategoriaById);

/**
 * @swagger
 * /models/categoria:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categoria]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Categoria'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', categoriaController.createCategoria);

/**
 * @swagger
 * /models/categoria/{id}:
 *   put:
 *     summary: Actualizar una categoría por ID
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categoria'
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *       404:
 *         description: Categoría no encontrada
 */

router.put('/:id', categoriaController.updateCategoria);

/**
 * @swagger
 * /models/categoria/{id}:
 *   delete:
 *     summary: Eliminar una categoría por ID
 *     tags: [Categoria]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       404:
 *         description: Categoría no encontrada
 */
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;
