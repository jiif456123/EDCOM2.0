var contrasena = require('./contrasena.model');

var listarporId = (id) => {
    return new Promise((resolve, reject) => {
        contrasena.findById(id).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

var registrar = (contra) => {
    let newCont = new contrasena({
        correo: contra.correo,
        estado: 1,
        timeStamp: new Date()
    })
    return new Promise((resolve, reject) => {
        newCont.save(newCont, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var actualizar = (id) => {
    let act = {
        estado: 0,
    }
    return new Promise((resolve, reject) => {
        contrasena.findByIdAndUpdate(id, act)
            .exec((err, data) => {
                if (err) reject(err)
                resolve(data)
            })
    })
}

module.exports = {
    listarporId: listarporId,
    registrar: registrar,
    actualizar: actualizar
}