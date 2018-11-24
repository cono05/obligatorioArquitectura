const Tarjeta = require('../Modelos/tarjeta');

exports.test = function(req, res){
    res.send("ControladorTarjeta saluda desde app Emisor");
}

exports.emitirTarjeta = function(req, res){
    let tarjeta = new Tarjeta({
        numeroDeCuentaPrincipal: req.body.numeroDeCuentaPrincipal,
        nombreTitularDeTarjeta: req.body.nombreTitularDeTarjeta,
        mesVencimiento: req.body.mesVencimiento,
        anioVencimiento: req.body.anioVencimiento,
        saldoActual: req.body.saldoActual
    });
    tarjeta.save(function(err){
    if(err){
        return next(err)
    }
    res.send('Tarjeta emitida correctamente')
    })
}