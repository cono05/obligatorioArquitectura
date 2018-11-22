const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let puerto = 3002;

app.listen(puerto, ()=>{
    console.log('App gateway corriendo en puerto ' + puerto);
});