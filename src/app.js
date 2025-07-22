const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.routes.js');
const adoptionRoutes = require('./routes/adoption.routes.js');
const cartRoutes = require('./routes/carts.routes.js');
const productRoutes = require('./routes/product.routes.js');
const { swaggerUi, swaggerSpec } = require('./config/swagger.js');

// Inicializar entorno
dotenv.config();

// Crear instancia de la app
const app = express();

// Middlewares globales
app.use(express.json());

// Rutas principales
app.use('/api/users', userRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/products', productRoutes);

// Documentación Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Ruta base para verificar que funcione
app.get('/', (req, res) => {
  res.send('API del Proyecto Final en funcionamiento 🚀');
});

module.exports = app;
