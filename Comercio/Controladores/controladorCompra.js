const Compra = require('../modelos/compra');
//Version simple sin validacion

exports.test = function(req, res){
    res.send('Saludos desde el controllador Test de comercio');
};

exports.crearCompra = function(req, res){
    let compra = new Compra({
        id: mongoose.Schema.Types.ObjectId,
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
    });
    compra.save(function(err){
        if(err){
            return next(err)
        }
        res.send('Compra almacenada correctamente')
    })
};