var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reporte = new Schema({

    asunto: { type: String },
    mes: { type: String },
    fechaPago: { type: Date },
    monto: { type: Number },
    estado: { type: String },
    tipoAsunto: { type: String }
}, {
    versionKey: false
});

var model = mongoose.model('Reporte', reporte);
module.exports = model;