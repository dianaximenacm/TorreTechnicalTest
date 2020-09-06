const express = require('express'),
    app = express(),
    app=use(express.json()),

    path = require('path'); // Path es uno de los 34 módulos de Node

// Nos permite ubicar los archivos de la carpeta public (css & img)
// img src="./public/img/imagen.jpg"
app.use(express.static(path.join(__dirname, "/public")));

cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

app.use(cookieParser());
app.use(cookieSession({secret: "I'm a secret"}));

app.get('/', (peticion, respuesta)=>{
    peticion.session.visitas || (peticion.session.visitas = 0);
    let n = peticion.session.visitas++;
    console.log(`Cantidad Visitas ${n}`)
    // respuesta.end(`<h1>Visita # ${n}</h1>`);
    respuesta.sendFile(`${__dirname}/views/index.html`)
});

// Crearemos las rutas de nuestra aplicación
// localhost:8080
app.get('/', (peticion, respuesta)=>{
    respuesta.sendFile(`${__dirname}/views/index.html`);
});

app.listen(8080);
console.log('I´m working right! Yeah');