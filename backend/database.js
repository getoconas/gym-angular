const mongoose = require('mongoose');
const URI = 'mongodb://localhost/project-gym-angular';

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true },);

//mongoose.connect(URI).then(console.log('La base de datos esta conectada...')).catch(err => console.error(err));

module.exports = mongoose;