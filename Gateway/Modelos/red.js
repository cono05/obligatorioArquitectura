const mongoose = require('mongoose');

const redSchema = mongoose.Schema({
    nombreRed: {type: String, required: true},
    tarjetas:[
        numeroDeCuentaPrincipal,
        nombreTitularDeTarjeta,
        mesVencimiento,
        anioVencimiento,
        limiteDeCredito        
    ]
});
//dahfkjadshfkjsd
module.exports = mongoose.model('Transaccion', transaccionSchema);