const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://cono:144425c@ds163176.mlab.com:63176/dbred';

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB , { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const tarjeta = require('./Rutas/tarjetaRuta');
const emisor = require('./Rutas/emisorRuta');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/tarjetas' , tarjeta);
app.use('/emisor' , emisor);

let puerto = 3002;

app.listen(puerto, ()=>{
    console.log('App gateway corriendo en puerto ' + puerto);
});