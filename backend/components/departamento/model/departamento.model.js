var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departamento = new Schema({
    nombre: { type: String },
    numDepartamento: { type: Number },
    cochera: { type: Number },
}, {
    versionKey: false
});

var model = mongoose.model('Departamento', departamento);
module.exports = model;