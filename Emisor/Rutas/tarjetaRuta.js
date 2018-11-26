const express = require('express');
const router = express.Router();

const controladorTarjeta = require('../Controladores/controladorTarjeta');
const controladorTransaccion = require('../Controladores/controladorTransaccion');

router.get('/test' , controladorTarjeta.test);

router.post('/emitirTarjeta' , controladorTarjeta.emitirTarjeta);
router.post('/:id/agregarTransaccion' , controladorTarjeta.agregarTransaccionEnTarjeta );

//router.post('/registrarTransaccion', controladorTarjeta.registrarTransaccion);

//router.put('/:id/modificarSaldo' , controladorTarjeta.modificarSaldoDeTarjeta);

router.get('/:id' , controladorTarjeta.obtenerDetallesTarjeta);

//router.put('/:id/modificarSaldo' , controladorTarjeta.modificarSaldoDeTarjeta );

module.exports = router;

