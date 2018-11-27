const mongoose = require('mongoose');

const transaccionSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    idComercio: String,
    //idTarjeta: {type:mongoose.Schema.Types.ObjectId, ref: 'Tarjeta'},
    dia: {type: String, required: true},
    mes: {type: String, required: true},
    anio: {type: String, required: true},
    monto: {type: String, required: true},
    nombreProducto: {type: String, required: true},
    estado: String        
});

module.exports = mongoose.model('Transaccion', transaccionSchema);