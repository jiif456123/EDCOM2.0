var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resi = new Schema({
    nombre: { type: String },
    ndepartamento: { type: Number },
    fecha: { type: Date },
    monto: { type: Number },
}, {
    versionKey: false
});

var model = mongoose.model('Resi', resi);
module.exports = model;