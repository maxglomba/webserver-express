const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Expres HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: "maximiliano glomba"
    });
})

app.get('/about', (req, res) => {

    res.render('about', {
        heroe: "homero simpsOn"
    });
})

app.get('/data', (req, res) => {
    let salida = {
        nombre: "maximiliano",
        edad: 30,
        url: req.url
    }
    res.send(salida);
    console.log(`Ingreso a ${req.url}`, salida);
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})