const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://cono:144425c@ds163176.mlab.com:63176/dbcomercio';
// EDITAR ESTO: let dev_db_url = 'mongodb://cono:144425c@ds141783.mlab.com:41783/productstutorial';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB , { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const compra = require('./Rutas/compra.ruta');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/compras' , compra);

let port = 3000;
app.listen(port, ()=>{
    console.log('App comercio corriendo en puerto ' + port);
});

//probando sincronizar git con dsisto