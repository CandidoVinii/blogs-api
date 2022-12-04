const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/api.js'];
const pathRoot = require('./src/api');

swaggerAutogen(outputFile, endpointsFiles).then(() => pathRoot);