const Tarjeta = require('../Modelos/tarjeta');
//const Transaccion = require('../Modelos/transaccion');

exports.registrarTransaccion = function(req, res){
    let transaccion = new Transaccion(
        {
            idTarjeta: req.body.Tarjeta.idTarjeta,
            dia: req.body.dia,
            mes: req.body.mes,
            anio: req.body.anio,
            monto: req.body.monto,
            nombreProducto: req.body.nombreProducto
        }
    );
    transaccion.save(function(err){
        if(err){
            res.send('Error al registrar transaccion')
        }
        res.send('Transaccion registrada correctamente');
        })
}

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

exports.modificarSaldoDeTarjeta = function(req, err, res){
    let tarjeta = Tarjeta.findById(req.params.id);
    if(err){
        return next(err)
    } 
    tarjeta.saldoActual = tarjeta.saldoActual - req.body.monto;
    res.send('Saldo de tarjeta modificado correctamente')
}