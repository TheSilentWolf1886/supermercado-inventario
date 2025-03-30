const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Supermercado API',
      version: '1.0.0',
      description: 'API para gestionar el inventario del supermercado',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local',
      },
    ],
  },

  apis: ['./routes/clientes.routes.js','./routes/categorias.routes.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
