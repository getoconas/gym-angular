const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonaSchema = new Schema({
  dni: { type: Number, require: true },
  apellido: { type: String, require: true },
  nombre: { type: String, require: true },
  fecha_nacimiento: { type: Date, require: true},
  domicilio: { type: String, require: true },
  telefono: { type: String, require: true },
  correo: { type: String, require: true }
});

module.exports = mongoose.models.Persona || mongoose.model('Persona', PersonaSchema);