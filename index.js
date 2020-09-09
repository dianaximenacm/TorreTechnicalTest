const { Console } = require('console');

const express = require('express');
const { response } = require('express');
//const { request } = require('http');
app = express();
request = require('request')

// Settings
app.set('appName','TorreTechnicalTest');
app.set('port',3000)
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
    respuesta.sendFile(`${__dirname}/index.html`)
});

// Crearemos las rutas de nuestra aplicación
// localhost:8080

app.get('/photo',(req, res)=>{
   
 // MIDDLEWARES
app.use(express.json());

// ROUTES
let data;
username = req.query.userName
request.get('https://torre.bio/api/bios/' + username, function(error, body){ 

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


app.get('/compare', (req, res)=>{

    // MIDDLEWARES
    app.use(express.json());
    username = req.query.userName
    offerId = req.query.offerId
    
    request.get('https://torre.bio/api/bios/'+username, function(error, body){ 
        user=JSON.parse(body.body);
        request.get('https://torre.co/api/opportunities/'+offerId, function(error,body){
            offer=JSON.parse(body.body);
            user_strengths = []
            user.strengths.forEach(item => {
                user_strengths.push(item.name)
            });
            offer_strengths = []
            offer.strengths.forEach(item => {
                offer_strengths.push(item.name)
            });
            // Source: https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848
            res.json({
                'interception': offer_strengths.filter(x => user_strengths.includes(x)),
                'difference': offer_strengths.filter(x => !user_strengths.includes(x))
            })
        });
    });
    
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('I´m working right! Yeah')
});
