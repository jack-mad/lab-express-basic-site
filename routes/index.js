//importaciones
const express = require("express");
const router = express.Router();

//rutas

router.get("/", (req, res) => {
  res.render("index");
});

//exportaciones
module.exports = router;
