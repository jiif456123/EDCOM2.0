var Pago = require('../model/pago.model');

var listarPago = () => {

    let query = {
        estado: { $ne: 3 }
    };
    return new Promise((resolve, reject) => {
        Pago.find(query).exec((err, listarPago) => {
            if (err) reject(err);
            resolve(listarPago);
        });
    });
};
var listarPagoId = (id) => {

    return new Promise((resolve, reject) => {

        Pago.findById(id)
            .exec((err, pago) => {
                if (err) reject(err);

                console.log(pago)
                resolve(pago);
            })

    });
};

var registarPago = (pago) => {

    let objPago = new Pago({
        nombre: pago.nombre,
        fechapago: pago.fechapago,
        cta: pago.cta,
        estado: 0,
        monto: pago.monto,
        foto: pago.foto,
    });
    return new Promise((resolve, reject) => {
        objPago.save(objPago, (err, pago) => {
            if (err) reject(err);
            resolve(pago);
        });
    });
};

var modificarPago = (id, pago) => {

    return new Promise((resolve, reject) => {
        Pago.findByIdAndUpdate(id, pago, (err, pagos) => {

            if (err) {
                reject(err);
            }
            resolve(pagos);
        });
    });
};


var eliminarPago = (id) => {
    return new Promise((resolve, reject) => {
        Pago.remove({ _id: id }, (err, pagos) => {
            if (err) { reject(err); }
            resolve(pagos);
        })
    })
}

module.exports = {
    listar: listarPago,
    registrar: registarPago,
    listarID: listarPagoId,
    modificar: modificarPago,
    eliminar: eliminarPago,
};