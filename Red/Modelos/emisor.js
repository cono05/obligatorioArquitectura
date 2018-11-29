const mongoose = require('mongoose');
const emisorSchema = mongoose.Schema({
    nombreEmisor:{type:String, required: true},
    tarjetas:[
        {
            numeroDeCuentaPrincipal: String,
            nombreTitularDeTarjeta: String,
            mesVencimiento: String,
            anioVencimiento: String,
            limiteDeCredito: Number        
        }
    ]
});

module.exports = mongoose.model('Emisor', emisorSchema);