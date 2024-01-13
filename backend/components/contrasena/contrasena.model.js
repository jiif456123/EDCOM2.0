var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contrasena = new Schema({
    correo: { type: String },
    estado: { type: Number },
    timeStamp: { type: Date }
}, {
    versionKey: false
});

var model = mongoose.model('Contrasena', contrasena);
module.exports = model;