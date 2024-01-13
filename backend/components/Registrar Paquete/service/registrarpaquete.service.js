var Paquete = require('../model/registrarpaquete.model');

var listarPaquete = () => {

    return new Promise((resolve, reject) => {

        Paquete.find({}).populate('resi').exec((err, paquetes) => {
            if (err) {
                reject(err);
            }
            resolve(paquetes)
        });
    });
};
var listarPaqueteId = (id) => {

    return new Promise((resolve, reject) => {

        Paquete.findById(id).populate('resi')
            .exec((err, paquete) => {
                if (err) reject(err);
                resolve(paquete);
            })

    });
};

var registarPaquete = (paquete) => {

    let objPaquete = new Paquete({
        cantidad: paquete.cantidad,
        descripcion: paquete.descripcion,
        fechaEmitida: paquete.fechaEmitida,
        estado: paquete.estado,
        resi: paquete.resi,
    });

    return new Promise((resolve, reject) => {
        objPaquete.save(objPaquete, (err, paquete) => {
            if (err) reject(err);
            resolve(paquete);
        });
    });
};

var modificarPaquete = (id, paquete) => {

    console.log(paquete, ' [paquete]');

    return new Promise((resolve, reject) => {
        Paquete.findByIdAndUpdate(id, paquete, (err, paquetes) => {

            if (err) {
                reject(err);
            }
            resolve(paquetes);
        });
    });
};


var eliminarPaquete = (id) => {
    return new Promise((resolve, reject) => {
        Paquete.remove({ _id: id }, (err, paquetes) => {
            if (err) { reject(err); }
            resolve(paquetes);
        })
    })
}



module.exports = {
    listar: listarPaquete,
    registrar: registarPaquete,
    listarID: listarPaqueteId,
    modificar: modificarPaquete,
    eliminar: eliminarPaquete,
};