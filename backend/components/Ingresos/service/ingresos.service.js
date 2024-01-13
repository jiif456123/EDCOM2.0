var Ingresos = require('../model/ingresos.model');

var listarIngresos = () => {

    let query = {
        estado: { $ne: 3 }
    };
    return new Promise((resolve, reject) => {
        Ingresos.find(query).exec((err, listarIngresos) => {
            if (err) reject(err);
            resolve(listarIngresos);
        });
    });
};
var listarIngresosId = (id) => {

    return new Promise((resolve, reject) => {

        Ingresos.findById(id)
            .exec((err, ingresos) => {
                if (err) reject(err);

                console.log(ingresos)
                resolve(ingresos);
            })

    });
};

var registarIngresos = (ingresos) => {

    let objIngreso = new Ingresos({
        nombre: ingresos.nombre,
        monto: ingresos.monto,
    });

    return new Promise((resolve, reject) => {
        objIngreso.save(objIngreso, (err, ingresos) => {
            if (err) reject(err);
            resolve(ingresos);
        });
    });
};

module.exports = {
    listar: listarIngresos,
    registrar: registarIngresos,
    listarID: listarIngresosId,

};