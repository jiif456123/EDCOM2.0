var Egresos = require('../model/egresos.model');

var listarEgresos = () => {

    let query = {
        estado: { $ne: 3 }
    };
    return new Promise((resolve, reject) => {
        Egresos.find(query).exec((err, listarEgresos) => {
            if (err) reject(err);
            resolve(listarEgresos);
        });
    });
};
var listarEgresosId = (id) => {

    return new Promise((resolve, reject) => {

        Egresos.findById(id)
            .exec((err, egresos) => {
                if (err) reject(err);

                console.log(egresos)
                resolve(egresos);
            })

    });
};

var registarEgreso = (egresos) => {

    let objEgreso = new Egresos({
        nombre: egresos.nombre,
        monto: egresos.monto,
    });

    return new Promise((resolve, reject) => {
        objEgreso.save(objEgreso, (err, egresos) => {
            if (err) reject(err);
            resolve(egresos);
        });
    });
};

module.exports = {
    listar: listarEgresos,
    registrar: registarEgreso,
    listarID: listarEgresosId,

};