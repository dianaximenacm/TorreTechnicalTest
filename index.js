const { Console } = require('console');

const express = require('express');
const { response } = require('express');
//const { request } = require('http');
app = express();
request = require('request')

// Settings
app.set('appName','TorreTechnicalTest');
app.set('port',8080)
app.set('view engine','ejs');


    path = require('path'); // Path es uno de los 34 módulos de Node


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

app.get('/photo',(req, res)=>{
   
 // MIDDLEWARES
app.use(express.json());

// ROUTES
let data;

request.get('https://torre.bio/api/bios/DianaXimenaChitiva', function(error, body){ 

res.json(body);
 
data=body;

});

});

//ROUTES

app.get('/offer', (req, res)=>{
    
// MIDDLEWARES
app.use(express.json());

let offer;

request.get('https://torre.co/api/opportunities/ed8YxErX', function(error,body){

    res.json(body);

    offer=body;

});
});


function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}

function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}

app.get('/compare', (req, res)=>{

    // MIDDLEWARES
    app.use(express.json());
    
    request.get('https://torre.bio/api/bios/DianaXimenaChitiva', function(error, body){ 
        user=JSON.parse(body.body);
        //console.log(user)
        request.get('https://torre.co/api/opportunities/ed8YxErX', function(error,body){
            offer=JSON.parse(body.body);
            user_strengths = []
            user.strengths.forEach(item => {
                user_strengths.push(item.name)
            });
            offer_strengths = []
            offer.strengths.forEach(item => {
                offer_strengths.push(item.name)
            });
            res.json({
                'interception': intersect(user_strengths, offer_strengths),
                'difference': arr_diff(offer_strengths, user_strengths)
            })
        });
    });
    
})


app.listen(app.get('port'), () =>{
    console.log('I´m working right! Yeah')
});
