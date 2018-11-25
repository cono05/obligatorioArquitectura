const express = require('express');
const router = express.Router();

const controladorTarjeta = require('../Controladores/controladorTarjeta');

router.get('/test' , controladorTarjeta.test);

router.post('/registrarTarjeta' , controladorTarjeta.registrarTarjeta);

module.exports = router;