var areacomun = require('../model/areacomun.model');

var listarareacomun = () => {
    return new Promise((resolve, reject) => {
        areacomun.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);

        })
    })
}

let guardar = (are) => {
    let newArea = new areacomun({
        nombre: are.nombre,
        ubicacion: are.ubicacion,
        area: are.area,
        estado: are.estado
    })
    return new Promise((resolve, reject) => {
        newArea.save(newArea, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

module.exports = {
    listar: listarareacomun,
    crear: guardar
}