var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var visita = new Schema({

    nombres: { type: String },
    apellidos: { type: String },
    nacompanantes: { type: Number },
    departamento: { type: String },
    fechaProgramada: { type: Date },
    horaProgramada: { type: Date },
    estado: { type: Number }
}, {
    versionKey: false
});

var model = mongoose.model('Visita', visita);
module.exports = model;