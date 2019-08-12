var express = require('express');

var UserController = require('../controllers/user');

// Llamamos al router 
var api = express.Router();
var md_auth = require('../middlewares/authenticated');


// Creamos una ruta para los metodos que tenemos en nuestros controladores 
api.get('/user',UserController.init);
api.get('/user/all',UserController.getAll);
api.get('/user/:id',md_auth.ensureAuth, UserController.getUser);
api.post('/user',UserController.insertUser);

module.exports = api;