const Compra = require('../modelos/compra');
const gateway = require('../Modelos/gateway');
const request = require('request');

//Version simple sin validacion

exports.test = function(req, res){
    res.send('Saludos desde el controllador Test de comercio');
};
//prueba de comunicar dos app
// exports.algo = function(req,res){
//     request.get('http://localhost:3001/transacciones/test'), function (error, response, body) {
//         console.log('error:', error); // Print the error if one occurred
//         console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         console.log('body:', body); // Print the HTML for the Google homepage.
//       };
// }

exports.crearCompra = function(req, res){
    //necesitamos una query para que dependiendo de req.body.categoriaProducto seleccionar el gateway
    //que le decimos a TePAgoYa que debe ir la transaccion
    // request.post({url:'//localhost:3004/registrarTransaccion'} ,form: {gateway:'gatewayA'}} , function(err, res) {
        let compra = new Compra({
            //id: mongoose.Schema.Types.ObjectId,
            calleEnvio: req.body.calleEnvio,
            numeroDePuertaEnvio: req.body.numeroDePuertaEnvio,
            ciudadEnvio: req.body.ciudadEnvio,
            paisEnvio: req.body.paisEnvio,
            codigoPostalEnvio: req.body.codigoPostalEnvio,
            monto: req.body.monto,
            diaCompra: req.body.diaCompra,
            mesCompra: req.body.mesCompra,
            anioCompra: req.body.anioCompra,
            nombreProducto: req.body.nombreProducto,
            cantidadProducto: req.body.cantidadProducto,
            categoria: req.body.categoria,   
            estado:"confirmada"
        });
        compra.save(function(err){
            if(err){
                res.status(400).send();
            }
            res.status(201).send(compra);   
        })   
};