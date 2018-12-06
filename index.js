const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//crea la app
const app = express();

//conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/restaurantes', { useNewUrlParser: true });

//El odern de los middleware es importante
//middleware https://expressjs.com/es/guide/using-middleware.html
app.use(express.static('public')); //https://expressjs.com/es/starter/static-files.html
app.use(bodyParser.json());
app.use('/api', require('./routes/api'));

//Este middleware tiene que ir el último para capturar los errores
//Al tener cuatro argumentos se identifica com unmiddleware manejador de errores
app.use((err, req, res, next) => {
    console.log(err);
});

//Configurando el puerto del servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor escuchando por el puerto ${port} ....`);
});