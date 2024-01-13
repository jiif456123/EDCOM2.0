var Resi = require('../model/resi.model');

var listarResi = () => {

    let query = {
        estado: { $ne: 3 }
    };
    return new Promise((resolve, reject) => {
        Resi.find(query).exec((err, listarResi) => {
            if (err) reject(err);
            resolve(listarResi);
        });
    });
};
var listarResiId = (id) => {

    return new Promise((resolve, reject) => {

        Resi.findById(id)
            .exec((err, resi) => {
                if (err) reject(err);

                console.log(resi)
                resolve(resi);
            })

    });
};

var registarResi = (resi) => {

    let objResi = new Resi({
        nombre: resi.nombre,
        ndepartamento: resi.ndepartamento,
        fecha: resi.fecha,
        monto: resi.monto,
    });

    return new Promise((resolve, reject) => {
        objResi.save(objResi, (err, resi) => {
            if (err) reject(err);
            resolve(resi);
        });
    });
};

var modificarResi = (id, resi) => {

    console.log(resi, ' [resi]');

    return new Promise((resolve, reject) => {
        Resi.findByIdAndUpdate(id, resi, (err, resis) => {

            if (err) {
                reject(err);
            }
            resolve(resis);
        });
    });
};


var eliminarResi = (id) => {
    return new Promise((resolve, reject) => {
        Resi.remove({ _id: id }, (err, resis) => {
            if (err) { reject(err); }
            resolve(resis);
        })
    })
}

module.exports = {
    listar: listarResi,
    registrar: registarResi,
    listarID: listarResiId,
    modificar: modificarResi,
    eliminar: eliminarResi,
};