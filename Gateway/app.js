const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://cono:144425c@ds163176.mlab.com:63176/dbgateway';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB , { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const transaccion = require('./Rutas/transaccionRuta');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/transacciones', transaccion);
let port = 3001;
app.listen(port, ()=>{
    console.log('App gateway corriendo en puerto ' + port);
});