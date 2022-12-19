require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./swagger.json');

const app = express(); // defining the Express app
app.use(bodyParser.json()); // using bodyParser to parse JSON bodies into JS objects
app.use(cors()); // enabling CORS for all requests

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Utherverse Flow API',
    version: '1.0.0',
  },
};
const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./routes/*.js'], // Paths to files containing OpenAPI definitions
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson)); // documenting api endpoint

const hostname = process.env.HOST_NAME || '127.0.0.1';
const port = process.env.PORT ||  3000;

app.get('/', (req, res) => {
  res.end('Welcome to Utherverse API');
});
app.use('/api', [
  require('./routes/namedata.routes'),
  require('./routes/mnemonic.routes'),
  require('./routes/labelgroup.routes'),
  require('./routes/ndrelation.routes')
]);
app.use('/v1', [
  require('./routes/badges.routes')
]);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});