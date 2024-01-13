var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var egreso = new Schema({
    nombre: { type: String },
    monto: { type: Number },
}, {
    versionKey: false
});

var model = mongoose.model('Egreso', egreso);
module.exports = model;