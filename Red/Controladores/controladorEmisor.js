const Emisor = require('../Modelos/emisor');
const Tarjeta = require('../Modelos/tarjeta');

exports.test = function(req, res){
    res.send("ControladorTarjeta saluda desde app Red");
}

exports.registrarTarjetaEnEmisor = function(req, res){
    Emisor.findOne({nombreEmisor:req.body.nombreEmisor} , (err, resp)=>{
        if(err){
            console.log('entra en el error');
            res.status(404).send("Error al actualizar");
        }
        let tarjeta = new Tarjeta({
            numeroDeCuentaPrincipal:req.body.numeroDeCuentaPrincipal,
            nombreTitularDeTarjeta: req.body.nombreTitularDeTarjeta,
            mesVencimiento: req.body.mesVencimiento,
            anioVencimiento: req.body.anioVencimiento,
            limiteDeCredito: req.body.limiteDeCredito
        })
        resp.tarjetas.push(tarjeta);
        resp.save(err2=>{
            res.status(200).send("tarjeta agregada al emisor");
        })
    })
}

exports.registrarEmisor = function(req, res){
    let emisor = new Emisor({
        nombreEmisor: req.body.nombreEmisor        
    });
    emisor.save(function(err){
        if(err){
            res.status(400).send();
        }
        res.status(201).send(emisor);
    })
}

