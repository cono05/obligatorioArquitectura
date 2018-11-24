const mongoose = require('mongoose');

const cuentaSchema = mongoose.Schema({
    //id: mongoose.Schema.Types.ObjectId,
    nombreTitularDeCuenta: {type: String, required: true},
    saldo: {type: String, required: true},
    numeroSucursal: {type: String, required: true},
    numeroCuenta: {type: String, required: true}//ESTE DATO ES EL UNICO QUE HAY QUE ENCRIPTAR SEGUN PCI
});


module.exports = mongoose.model('Cuenta', cuentaSchema);
