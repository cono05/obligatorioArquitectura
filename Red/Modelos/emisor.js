const mongoose = require('mongoose');
const emisorSchema = mongoose.Schema({
    nombreEmisor:{type:String, required: true},
    tarjetas:[
        numeroDeCuentaPrincipal,
        nombreTitularDeTarjeta,
        mesVencimiento,
        anioVencimiento,
        limiteDeCredito        
    ]
})

module.exports = mongoose.model('Emisor', emisorSchema);