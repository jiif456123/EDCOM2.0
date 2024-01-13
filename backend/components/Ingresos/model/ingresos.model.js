var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ingreso = new Schema({
    nombre: { type: String },
    monto: { type: Number },
}, {
    versionKey: false
});

var model = mongoose.model('Ingreso', ingreso);
module.exports = model;