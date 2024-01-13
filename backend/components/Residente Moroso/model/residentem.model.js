var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pago = new Schema({
    nombre: { type: String },
    tipo: { type: String },
    pago: {
        type: Schema.Types.ObjectId,
        ref: 'Pago',
        required: [true, 'El Pago es requerido.']
    },
    departamento: {
        type: Schema.Types.ObjectId,
        ref: 'Departamento',
        required: [true, 'El departamento es requerido.']
    }
}, {
    versionKey: false
});

var model = mongoose.model('Residente', residente);
module.exports = model;