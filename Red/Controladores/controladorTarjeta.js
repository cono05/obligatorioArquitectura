const Tarjeta = require('../Modelos/tarjeta');
const Transaccion = require('../Modelos/transaccion');
exports.test = function(req, res){
    res.send("ControladorTarjeta saluda desde app Red");
}

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
           res.status(200).send("No se pudo registrar transaccion");
        }
        res.send(transaccion);
    })
}
exports.registrarTarjetaEnEmisor = function(req, res){    
    // let tarjeta = new Tarjeta({
    //     numeroDeCuentaPrincipal: req.body.numeroDeCuentaPrincipal,
    //     nombreTitularDeTarjeta: req.body.nombreTitularDeTarjeta,
    //     mesVencimiento: req.body.mesVencimiento,
    //     anioVencimiento: req.body.anioVencimiento,
    //     saldoActual: req.body.saldoActual,
    //     limiteDeCredito: req.body.limiteDeCredito,
    //     transacciones: [{
    //         idTransaccion : String,
    //         dia : String,
    //         mes: String,
    //         anio: String      
    //     }]
    // });
    // tarjeta.save(function(err){
    // if(err){
    //     return next(err)
    // }
    // res.send('Tarjeta registrada correctamente')
    // })
}

exports.obtenerDetallesTarjeta = function(req, res) {
    Tarjeta.findById(req.params.id, function(err, tarjeta){
        if(err){
            res.send('Error al obtener detalles de tarjeta')
        }
        res.send(tarjeta);
    })
}
