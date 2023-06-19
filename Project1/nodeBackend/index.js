const express = require('express');

const bodyParser = require('body-parser');


const { mongoose } = require('./db.js');
var ClientController = require('./controller/ClientController.js');

var app = express();
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, POST, DELETE"
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.listen(3001, () => console.log('server started at port : 3001'));

app.use('/clients', ClientController);