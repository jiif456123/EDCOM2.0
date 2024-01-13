var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reserva = new Schema({

    nombre: { type: String },
    areacomun: { type: Schema.Types.ObjectId, ref: 'Areacomun' },
    persona: { type: Schema.Types.ObjectId, ref: 'User' },
    fechaInicio: { type: Date },
    fechaFin: { type: Date },
    estado: { type: String },
}, {
    versionKey: false
});

var model = mongoose.model('Reserva', reserva);
module.exports = model;