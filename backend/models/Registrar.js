const { Schema, model } = require('mongoose');

const RegistrarSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    FechadeNacimineto: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Registrar', RegistrarSchema);