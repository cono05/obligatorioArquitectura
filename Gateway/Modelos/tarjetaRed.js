const mongoose = require('mongoose');

const tarjetaRedSchema = mongoose.Schema({
    tarjeta: {type: String, required: true}, // SE DEBERIA GUARDAR ENCRIPTADO?
    nombreRed: {type: String, required: true},   
});
//dahfkjadshfkjsd
module.exports = mongoose.model('TarjetaRed', tarjetaRedSchema);