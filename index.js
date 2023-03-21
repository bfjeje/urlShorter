const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

//I get the port from file .env-local, or default port: 3000.
const PORT = process.env.PORT || '3001';

const app = express();

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