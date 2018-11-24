const Tarjeta = require('../Modelos/tarjeta');

exports.emitirTarjeta = function(req, res){
    let tarjeta = new Tarjeta({
        numeroDeCuenta: req.body.numeroDeCuenta,
        nombreTitularDeTarjeta: req.body.nombreTitularDeTarjeta,
        mesVencimiento: req.body.mesVencimiento,
        anioVencimiento: req.body.anioVencimiento
    });
    tarjeta.save(function(err){
    if(err){
        return next(err)
    }
    res.send('Tarjeta emitida correctamente')
    })
}