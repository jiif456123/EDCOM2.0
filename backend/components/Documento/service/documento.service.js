let documento = require('../model/documento.model');


let guardar = (dep) => {
    let newDoc = new documento({
        nombre: dep.nombre,
        resumen: dep.resumen,
        filePath: dep.filePath,
        categoria: dep.categoria,
        estado: 0
    })
    return new Promise((resolve, reject) => {
        newDoc.save(newDoc, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var listar = () => {
    return new Promise((resolve, reject) => {
        documento.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var actualizar = (id1, body) => {
    let id = id1
    return new Promise((resolve, reject) => {
        documento.findByIdAndUpdate(id, body)
            .exec((err, data) => {
                if (err) {
                    console.log(err);

                    reject(err);
                }
                resolve(data)
            })
    })
}

var actualizarRechazar = (id1, estado) => {
    let id = id1
    let estado1 = {
        estado: estado,
    }
    return new Promise((resolve, reject) => {
        documento.findByIdAndUpdate(id, estado1)
            .exec((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data)
            })
    })
}

module.exports = {
    crear: guardar,
    listar: listar,
    actualizar: actualizar,
    actualizarRechazar: actualizarRechazar
}
