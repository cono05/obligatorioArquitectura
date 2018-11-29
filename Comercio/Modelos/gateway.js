const mongoose = require('mongoose');

const gatewaySchema = mongoose.Schema({
    nombreGateway: {type: String, required: true},
    categoria: {type: String, required: true},   
});

module.exports = mongoose.model('Compra', gatewaySchema);