const Transaccion = require('../Modelos/transaccion');

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
           // console.log('entro en el error');
            res.status(200).send("No hay productos");
        }
        res.send(transaccion);
    })
}

exports.obtenerTransaccionesDeComercio = function(req, res){
    
}