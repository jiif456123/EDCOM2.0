var Presupuesto = require('../model/presupuesto.model');

var listarPresupuesto = () => {

    let query = {
        estado: { $ne: 3 }
    };
    return new Promise((resolve, reject) => {
        Presupuesto.find(query).exec((err, listarPresupuesto) => {
            if (err) reject(err);
            resolve(listarPresupuesto);
        });
    });
};
var listarPresupuestoId = (id) => {

    return new Promise((resolve, reject) => {

        Presupuesto.findById(id)
            .exec((err, presupuesto) => {
                if (err) reject(err);

                console.log(presupuesto)
                resolve(presupuesto);
            })

    });
};

var registarPresupuesto = (presupuesto) => {

    let objPresupuesto = new Presupuesto({
        asunto: presupuesto.asunto,
        mes: presupuesto.mes,
        fechaPago: presupuesto.fechaPago,
        monto: presupuesto.monto,
        estado: presupuesto.estado,
        tipoAsunto: presupuesto.tipoAsunto
    });

    return new Promise((resolve, reject) => {
        objPresupuesto.save(objPresupuesto, (err, presupuesto) => {
            if (err) reject(err);
            resolve(presupuesto);
        });
    });
};

var modificarPresupuesto = (id, presupuesto) => {

    console.log(presupuesto, ' [presupuesto]');

    return new Promise((resolve, reject) => {
        Presupuesto.findByIdAndUpdate(id, presupuesto, (err, presupuestos) => {

            if (err) {
                reject(err);
            }
            resolve(presupuestos);
        });
    });
};


var eliminarPresupuesto = (id) => {
    return new Promise((resolve, reject) => {
        Presupuesto.remove({ _id: id }, (err, presupuestos) => {
            if (err) { reject(err); }
            resolve(presupuestos);
        })
    })
}

module.exports = {
    listar: listarPresupuesto,
    registrar: registarPresupuesto,
    listarID: listarPresupuestoId,
    modificar: modificarPresupuesto,
    eliminar: eliminarPresupuesto,
};