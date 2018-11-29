const mongoose = require('mongoose');

const cuentaSchema = mongoose.Schema({
    saldo: {type: Number, required: true},
    nombreTitularDeCuenta: {type: String, required: true},    
    numeroCuenta: {type: Number, required: true}//ESTE DATO ES EL UNICO QUE HAY QUE ENCRIPTAR SEGUN PCI
});

module.exports = mongoose.model('Cuenta', cuentaSchema);
