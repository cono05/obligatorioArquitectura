const express = require('express');
const router = express.Router();

// Requerir los controladores que aun no hemos creado
const controlador_cuenta = require('../controladores/controladorCuenta');

// a simple test url to check that all of our files are communicating correctly.
router.get('/testPuerto' , controlador_cuenta.test);

router.post('/crearCuenta' , controlador_cuenta.crearCuenta);

module.exports = router;