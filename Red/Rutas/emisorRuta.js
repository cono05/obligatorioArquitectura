const express = require('express');
const routerEmisor = express.Router();

const controladorEmisor = require('../Controladores/controladorEmisor');

routerEmisor.post('/registrarTarjeta' , controladorEmisor.registrarTarjetaEnEmisor);
routerEmisor.post('/registrarEmisor' , controladorEmisor.registrarEmisor);


module.exports = routerEmisor;