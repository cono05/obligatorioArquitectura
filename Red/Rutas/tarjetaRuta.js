const express = require('express');
const router = express.Router();

const controladorTarjeta = require('../Controladores/controladorTarjeta');
//const controladorEmisor = require('../Controladores/controladorEmisor');

router.get('/test' , controladorTarjeta.test);
router.post('/tarjetas/registrarTransaccion', controladorTarjeta.registrarTransaccion);

module.exports = router;