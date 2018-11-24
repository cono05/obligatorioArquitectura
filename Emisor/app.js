const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://cono:144425c@ds259210.mlab.com:59210/dbemisor';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB , { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const cuenta = require('./Rutas/cuentaRuta');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/cuentas' , cuenta);

let puerto = 3003;

app.listen(puerto, ()=>{
    console.log('App Emisor corriendo en puerto ' + puerto);
});