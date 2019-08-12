const mongoose = require('mongoose');

var app = require('./app');

// Indicamos el puerto en el que trabajará el servidor 
var port = 3800;

// Le indicamos a mongoose que haremos conexión con promesas 
mongoose.Promise = global.Promise;

// Utilizamos el metodo de connect para conectarnos a nuestra base de datos 

mongoose.connect('mongodb://localhost:27017/social',{ useNewUrlParser: true })
.then(()=> {
    console.log("La conexión a base de datos se ha realizado exitosamente");

    // Inicializamos el servidor con Node
    app.listen(port,()=> {
       console.log("Servidor ejecutandose en localhost:3800");
    });
}).catch(err => console.log(err));
