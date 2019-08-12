
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

// Importamos rutas
var user_routes = require('./routes/user');

// Cargar middlewares
// un metodo que se ejecuta antes que llegue a un controlador 
// Configuramos body parser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Cargamos las rutas 
app.use('/api', user_routes);


// Exportamos este modulo para poder usar la variables app fuera de este archivo 
module.exports = app;

