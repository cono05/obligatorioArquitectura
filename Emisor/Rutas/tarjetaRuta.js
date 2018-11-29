const express = require('express');
const routerTarjeta = express.Router();

const controladorTarjeta = require('../Controladores/controladorTarjeta');


routerTarjeta.get('/test' , controladorTarjeta.test);

routerTarjeta.post('/emitirTarjeta' , controladorTarjeta.emitirTarjeta);
routerTarjeta.post('/:id/agregarTransaccion' , controladorTarjeta.agregarTransaccionEnTarjeta );

routerTarjeta.get('/:id' , controladorTarjeta.obtenerDetallesTarjeta);

module.exports = routerTarjeta;

