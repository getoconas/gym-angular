let express = require('express');
let app = express();

const { mongosee } = require('./database');
const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Carga del modulo de direccionamiento de rutas 
// aqui van rutas

// Setting
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor iniciado en el puerto`, app.get('port'))
});