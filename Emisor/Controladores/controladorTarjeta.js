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
        saldoActual: req.body.saldoActual,
        limiteDeCredito: req.body.limiteDeCredito
    });
    tarjeta.save(function(err){
    if(err){
        return next(err)
    }
    res.send('Tarjeta emitida correctamente')
    })
}

exports.obtenerDetallesTarjeta = function(req, res) {
    Tarjeta.findById(req.params.id, function(err, tarjeta){
        if(err){
            res.send('Error al obtener detalles de tarjeta')
        }
        res.send(tarjeta);
    })
}

exports.modificarSaldoDeTarjeta = function(req, res){
    Tarjeta.findById(req.params.id, function(err, tarjeta){
        let x = tarjeta.saldoActual - req.body.monto;
        if(tarjeta.saldoActual - req.body.monto > 0){
            console.log('saldo suficiente :' + x);
        }
        console.log('saldo de tarjeta :' + tarjeta.saldoActual);
        if(err){
            res.send('Error al intentar modificar saldo')
        }
        res.send(tarjeta);
    })    
}