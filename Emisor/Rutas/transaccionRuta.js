const express = require('express');
const routerTransaccion = express.Router();
const controladorTransaccion = require('../Controladores/controladorTransaccion');

routerTransaccion.post('/registrarTransaccion', controladorTransaccion.registrarTransaccion);

module.exports = routerTransaccion;