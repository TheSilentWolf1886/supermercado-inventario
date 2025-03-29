import swaggerAutogen from 'swagger-autogen';
const outputFile='./swagger.json';
const endpointsFiles = ['./routes/*.routes.js'];

const doc = {
  info: {
    title: 'Supermercado API',
    description: 'API para gestionar el inventario del supermercado',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles, doc);