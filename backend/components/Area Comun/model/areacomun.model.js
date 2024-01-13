var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areacomun = new Schema({

    nombre: { type: String },
    ubicacion: { type: String },
    area: { type: String },
    estado: { type: String }
}, {
    versionKey: false
});

var model = mongoose.model('Areacomun', areacomun);
module.exports = model;