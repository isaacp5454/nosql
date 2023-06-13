const express = require('express')   //we installed npm package express, but now we have to require the package into our project.
const port = 3001;
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser'); //bodyParser is so you can access the json data like if it was recieving a request from insomnia. 

const users = require('./routes/api/userRoutes')   //grabs the user and thought files from ruotes. 
const thoughts = require('./routes/api/thoughtRoutes')

const db = require('./config/connection')   //requiring database connection 



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//app.use(express.urlencoded({ extended: true }));  //stuff you need to have so you can read the request in json format, without it, the data will be hard to read.
//app.use(express.json());

app.listen(port, ()=> {
    console.log (`API server running on port ${port}!`);
});



// routes    // commented out because no routes created
//app.use('/api/userRoutes', users)
//app.use('/api/thoughtRoutes', thoughts)    //allows us to use the routes we just required