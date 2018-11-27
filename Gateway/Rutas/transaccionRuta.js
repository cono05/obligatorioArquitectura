const express = require('express');
const router = express.Router();
const controladorTransaccion = require('../Controladores/controladorTransaccion');

router.post('/registrarTransaccion' , controladorTransaccion.registrarTransaccion);

router.get('/transaccionesComercio' , controladorTransaccion.obtenerTransaccionesDeComercio);

module.exports = router;