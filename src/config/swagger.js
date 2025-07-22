const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API del Proyecto Final',
      version: '1.0.0',
      description: 'Documentación con Swagger',
    },
  },
  apis: [
    './src/routes/*.js',   // Todas las rutas documentadas
    './src/controllers/*.js',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
