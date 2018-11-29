const express = require('express');
const router = express.Router();

// Requerir los controladores que aun no hemos creado
const controlador_compra = require('../controladores/controladorCompra');

// a simple test url to check that all of our files are communicating correctly.
router.get('/testPuerto' , controlador_compra.test);

router.post('/crear' , controlador_compra.crearCompra)

//router.get('/test' , controlador_compra.algo);

module.exports = router;