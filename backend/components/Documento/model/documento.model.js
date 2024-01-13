var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documento = new Schema({
    nombre: { type: String },
    resumen: { type: String },
    categoria: { type: String },
    filePath: { type: String },
    estado: {type: Number} //0: en curso, 1: aceptado, 2: rechazado
}, {
    versionKey: false
});

var model = mongoose.model('Documento', documento);
module.exports = model;