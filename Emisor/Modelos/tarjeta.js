const mongoose = require('mongoose');

const tarjetaSchema = mongoose.Schema({
    numeroDeCuentaPrincipal:{type:String, required: true},
    nombreTitularDeTarjeta: {type: String, required: true},
    mesVencimiento: {type: String, required: true},
    anioVencimiento: {type: String, required: true},
    saldoActual: {type: Number, required: true},
    limiteDeCredito: {type: Number, required: true},
    transacciones: [{
        idTransaccion : String,
        dia : String,
        mes: String,
        anio: String      
    }]
})

module.exports = mongoose.model('Tarjeta', tarjetaSchema);