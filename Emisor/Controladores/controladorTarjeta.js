const Tarjeta = require('../Modelos/tarjeta');
const Transaccion = require('../Modelos/transaccion');
const request = require('request');
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
    
    //request.post() aca hacer el reques.pos a la red para que registre en el emisor la tarjeta,
    //para eso tengo q tener en la red una bd con los emisores y cada emisor con sus tarjetas

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

exports.agregarTransaccionEnTarjeta = function(req, res){
    Tarjeta.findById(req.params.id, function(err, tarjeta){
        tarjeta.transacciones.push(req.body);
        let transaccionNueva = new Transaccion({
            idTarjeta: req.params.id,
            dia: req.body.dia,
            mes: req.body.mes,
            anio: req.body.anio,
            monto: req.body.monto,
            nombreProducto: req.body.nombreProducto
        })
        transaccionNueva.save(function(err){
            if(err){
               res.status(200).send("Error al registrar transaccion");
            }
        })  
        tarjeta.save(err2 => {
            res.status(200).send("transaccion agregada en tarjeta correctamente");
        })             
    })    
}