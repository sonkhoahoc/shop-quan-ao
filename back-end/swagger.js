const swaggerAutogen = require('swagger-autogen');

const outputFile = './swagger_output.json';
const endpointsFiles = [
    './src/routes/Router.ts'
];

const doc = {
    info: {
        version: '2.0.0',
        title: 'Shop Backend API',
        description: 'Shop Thoi Trang API'
    },
    host: '',
    bastPath: '/api/v1',
    schemes: [],
};

swaggerAutogen(outputFile, endpointsFiles, doc)
    .catch(error => {
        console.error('Erro when auto generate Swagger: ', error.message);
});