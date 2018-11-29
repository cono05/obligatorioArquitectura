const Transaccion = require('../Modelos/transaccion');
const TarjetaRed = require('../Modelos/tarjetaRed');

exports.registrarTransaccion = function(req, res){
    let transaccion = new Transaccion(
        {
            idComercio:req.body.idComercio,
           //idTarjeta: req.body.Tarjeta.idTarjeta,
            dia: req.body.dia,
            mes: req.body.mes,
            anio: req.body.anio,
            monto: req.body.monto,
            nombreProducto: req.body.nombreProducto,
            estado: req.body.estado
        }
    );
    transaccion.save(function(err){
        if(err){
           // console.log('entro en el error');
            res.status(200).send("Error guardando transaccion");
        }
        res.send(transaccion);
    })
}

exports.obtenerTransaccionesDeComercio = function(req, res){
    Transaccion.find({idComercio : req.body.idComercio}, (err,resp) => {
        if (err) {
            res.status(200).send("No hay transacciones");
        }
        res.status(200).send(resp);
    });
}

exports.identificarRedDeTarjeta = function(req,res){
    TarjetaRed.find( req.params.numeroTarjeta , (err, resp)=>{
        if(err){
            res.status(404).send('no se encuentra la tarjeta');
        }
        res.status(200).send(resp);
    });
}