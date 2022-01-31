//importaciones
const express = require("express");
const app = express(); 

//middlewares
require('dotenv').config()

app.use(express.static('public'))

app.set('views', __dirname + '/views')

app.set('view engine', 'hbs')

//rutas
app.use('/', require('./routes/index'))

// servidor
app.listen(3333, () => {
    console.log("Servidor activo");
  });