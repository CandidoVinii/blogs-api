const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/api.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./src/api')
})