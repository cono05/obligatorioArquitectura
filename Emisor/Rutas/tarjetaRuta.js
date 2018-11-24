const express = require('express');
const router = express.Router();

const controladorTarjeta = require('../Controladores/controladorTarjeta');

router.get('/test' , controladorTarjeta.test);

router.post('/emitirTarjeta' , controladorTarjeta.emitirTarjeta);

module.exports = router;

