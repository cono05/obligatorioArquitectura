const mongoose = require('mongoose');

const tarjetaSchema = mongoose.Schema({
    numeroDeCuenta:{type:String, required: true},
    nombreTitularDeTarjeta: {type: String, required: true},
    mesVencimiento: {type: String, required: true},
    anioVencimiento: {type: String, required: true}
})

module.exports = mongoose.model('Tarjeta', tarjetaSchema);