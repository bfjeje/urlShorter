const express = require('express');
const dotenv = require('dotenv');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

dotenv.config({path: '.env-local'});

//I get the port from file .env-local, or default port: 3001.
const PORT = process.env.PORT || '3000';

const app = express();

const spec = YAML.load("./docs/openAPI.yaml");
app.use('/docs', swaggerUi.serve, swaggerUi.setup(spec));

/*
Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/*
Routes
 */
const urlShorterRouter = require('./routes/urlShorter');
app.use('/urlshorter', urlShorterRouter);

/*
Start Listening
 */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})