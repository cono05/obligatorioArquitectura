const mongoose = require('mongoose');

const transaccionSchema = mongoose.Schema({
    //id: mongoose.Schema.Types.ObjectId,
    idComercio: String,
    numeroCuentaPrincipalTarjeta: {type: String, required: true},
    dia: {type: String, required: true},
    mes: {type: String, required: true},
    anio: {type: String, required: true},
    monto: {type: Number, required: true},
    nombreProducto: {type: String, required: true},
    estado: String    
});
module.exports = mongoose.model('Transaccion', transaccionSchema);