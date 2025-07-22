// src/routes/carts.routes.js

const express = require('express');
const {
  getCart,
  getCarts,
  addProductToCart,
  removeProductFromCart
} = require('../controllers/carts.controller.js');

const router = express.Router();

// Debug para verificar importación correcta de funciones
console.log('getCart:', getCart);
console.log('getCarts:', getCarts);
console.log('addProductToCart:', addProductToCart);
console.log('removeProductFromCart:', removeProductFromCart);

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Gestión de carritos
 */

/**
 * @swagger
 * /api/carts:
 *   get:
 *     summary: Obtiene todos los carritos
 *     tags:
 *       - Carts
 *     responses:
 *       200:
 *         description: Lista de carritos
 */
router.get('/', getCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     summary: Obtiene un carrito por ID
 *     tags:
 *       - Carts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carrito encontrado
 *       404:
 *         description: Carrito no encontrado
 */
router.get('/:id', getCart);

/**
 * @swagger
 * /api/carts/{id}/products:
 *   post:
 *     summary: Agrega un producto al carrito
 *     tags:
 *       - Carts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto agregado al carrito
 *       404:
 *         description: Carrito o producto no encontrado
 */
router.post('/:id/products', addProductToCart);

/**
 * @swagger
 * /api/carts/{id}/products/{productId}:
 *   delete:
 *     summary: Elimina un producto del carrito
 *     tags:
 *       - Carts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito
 *       404:
 *         description: Carrito o producto no encontrado
 */
router.delete('/:id/products/:productId', removeProductFromCart);

module.exports = router;
