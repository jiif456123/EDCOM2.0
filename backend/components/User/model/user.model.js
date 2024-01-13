var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({

    rol: { type: String },
    nombre: { type: String },
    apellidoPaterno: { type: String },
    apellidoMaterno: { type: String },
    username: { type: String },
    password: { type: String },
    celular: { type: String },
    foto: { type: String },
    dni: { type: String },
    departamento: {
        type: Schema.Types.ObjectId,
        ref: 'Departamento' }
}, {
    versionKey: false
});

var model = mongoose.model('User', user);
module.exports = model;