const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let port = 3000;
app.listen(port, ()=>{
    console.log('App comercio corriendo en puerto ' + port);
});

//probando sincronizar git con dsisto