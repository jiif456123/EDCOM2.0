
let Departamento = require('../model/departamento.model');


let guardar = (dep) => {
    let newDep = new Departamento({
        nombre: dep.nombre,
        numDepartamento: dep.numDepartamento,
        cochera: dep.cochera
    })
    return new Promise((resolve, reject) => {
        newDep.save(newDep, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var listar = () => {
    return new Promise((resolve, reject) => {
        Departamento.find({}).exec((err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

module.exports = {
    crear: guardar,
    listar: listar
}
