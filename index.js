const express = require('express');

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

app.get('/', (request, response) => {
    response.status(200).json({name:'Bruno', doing:'Coding'});
})

/*
Start Listening
 */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})