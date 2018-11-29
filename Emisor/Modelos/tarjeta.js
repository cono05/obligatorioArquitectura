const mongoose = require('mongoose');
const tarjetaSchema = mongoose.Schema({
    numeroDeCuentaPrincipal:{type:String, required: true},//Hay que encriptar
    nombreTitularDeTarjeta: {type: String, required: true},
    mesVencimiento: {type: String, required: true},
    anioVencimiento: {type: String, required: true},
    limiteDeCredito: {type: Number, required: true},
})
module.exports = mongoose.model('Tarjeta', tarjetaSchema);