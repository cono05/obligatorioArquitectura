const express = require('express');
const routerCuenta = express.Router();

const controlador_cuenta = require('../controladores/controladorCuenta');

routerCuenta.get('/testPuerto' , controlador_cuenta.test);

routerCuenta.post('/crearCuenta' , controlador_cuenta.crearCuenta);

module.exports = routerCuenta;