const express = require('express');

//I get the port from file .env-local, or default port: 3000.
const PORT = process.env.PORT || '3000';

const app = express();

/*
Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/*
Start Listening
 */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})