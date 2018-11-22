const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let puerto = 1238;

app.listen(puerto, ()=>{
    console.log('App TePagoYa corriendo en puerto ' + puerto);
});