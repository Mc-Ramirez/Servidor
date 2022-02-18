const express = require('express');
const conectarDB = require('./config/db');

//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB(); 

app.use(express.json());

app.use('/api/planets', require('./routes/planet'));

app.listen(4000, () =>{
    console.log('El servidor esta corriendo perfectamente')
})
