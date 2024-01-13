var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pago = new Schema({

    nombre: { type: String },
    fechapago: { type: Date },
    cta: { type: Number },
    estado: { type: Number },
    monto: { type: Number },
    foto: { type: String }
}, {
    versionKey: false
});

var model = mongoose.model('Pago', pago);
module.exports = model;