var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paquete = new Schema({

    cantidad: { type: Number },
    descripcion: { type: String },
    fechaEmitida: { type: Date },
    estado: { type: Number },
    resi: {
        type: Schema.Types.ObjectId,
        ref: 'Resi',
        required: [true, ' El residente debe ser necesario ']
    }

}, {
    versionKey: false
});

var model = mongoose.model('Paquete', paquete);
module.exports = model;