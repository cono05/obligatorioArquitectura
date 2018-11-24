const Cuenta = require('../modelos/cuenta');


exports.test = function(req, res){
    res.send('Saludos desde el controllador Test de Emisor');
};

exports.crearCuenta = function(req, res){
    let cuenta = new Cuenta({
        nombreTitular: req.body.nombreTitular,
        saldo: req.body.saldo,
        numeroSucursal: req.body.numeroSucursal,
        numeroCuenta: req.body.numeroCuenta
    });
    cuenta.save(function(err){
    if(err){
        return next(err)
    }
    res.send('Cuenta almacenada correctamente')
    })
}



