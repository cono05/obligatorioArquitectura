const mongoose = require('mongoose');

const compraSchema = mongoose.Schema({
    //id: mongoose.Schema.Types.ObjectId,
    calleEnvio: {type: String, required: true},
    numeroDePuertaEnvio: {type: String, required: true},
    ciudadEnvio: {type: String, required: true},
    paisEnvio: {type: String, required: true},
    codigoPostalEnvio: {type: String, required: true},
    monto: String,
    diaCompra: {type: String, required: true},
    mesCompra: {type: String, required: true},
    anioCompra: {type: String, required: true},
    //nombreTitularTarjeta: {type: String, required: true},
    nombreProducto: String,
    cantidadProducto: String,
    categoria: String,   
});

module.exports = mongoose.model('Compra', compraSchema);