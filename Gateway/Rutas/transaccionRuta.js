const express = require('express');
const router = express.Router();
const controladorTransaccion = require('../Controladores/controladorTransaccion');

router.post('/registrarTransaccion' , controladorTransaccion.registrarTransaccion);

router.get('/:idComercio/transacciones' , controladorTransaccion.obtenerTransaccionesDeComercio);

module.exports = router;