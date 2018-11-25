const mongoose = require('mongoose');

const tarjetaSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    numeroDeCuentaPrincipal:{type:String, required: true},
    nombreTitularDeTarjeta: {type: String, required: true},
    mesVencimiento: {type: String, required: true},
    anioVencimiento: {type: String, required: true},
    saldoActual: {type: String, required: true},
    limiteDeCredito: {type: String, required: true},
    transacciones: [
        {
            idTtransaccion: {type:mongoose.Schema.Types.ObjectId, ref: 'Tra'},            
            dia: {type: String, required: true},
            mes: {type: String, required: true},
            anio: {type: String, required: true},
            monto: {type: String, required: true}
        }
    ]
})

module.exports = mongoose.model('Tarjeta', tarjetaSchema);