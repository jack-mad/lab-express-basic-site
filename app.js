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
app.listen(process.env.PORT, () => {
    console.log("Servidor activo");
  });